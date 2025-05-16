import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useState } from "react"

// This function will run on the server at request time
export async function getServerSideProps() {
  try {
    // Replace with your actual Strapi URL
    const strapiURL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
    
    // Fetch trending posts (those with highest views or special trending flag)
    const res = await fetch(
      `${strapiURL}/api/articles?filters[trending][$eq]=true&populate=image,category&sort[0]=publishedAt:desc&pagination[limit]=3`
    );
    
    if (!res.ok) {
      throw new Error(`Failed to fetch posts: ${res.status}`);
    }
    
    const data = await res.json();
    
    // Format the data for our component
    const trendingPosts = data.data.map((post: { 
      id: number;
      attributes: {
        title: string;
        slug: string;
        image: {
          data?: {
            attributes: {
              url: string;
            };
          };
        };
        category: {
          data?: {
            attributes: {
              name: string;
            };
          };
        };
        excerpt?: string;
        publishedAt: string;
      };
    }) => ({
      id: post.id,
      title: post.attributes.title,
      slug: post.attributes.slug,
      image: post.attributes.image.data ? 
        strapiURL + post.attributes.image.data.attributes.url : 
        null,
      category: post.attributes.category.data ? 
        post.attributes.category.data.attributes.name : 
        "Uncategorized",
      excerpt: post.attributes.excerpt || "",
      publishedAt: post.attributes.publishedAt,
    }));
    
    return {
      props: {
        trendingPosts,
      },
    };
  } catch (error) {
    console.error("Error fetching trending posts:", error);
    // Return empty array if there's an error
    return {
      props: {
        trendingPosts: [],
      },
    };
  }
}

// Container animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

// Card animation
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
  hover: {
    y: -10,
    boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
    transition: {
      duration: 0.3
    }
  }
};

export default function TrendingNews({ trendingPosts }: { 
  trendingPosts: Array<{
    id: number;
    title: string;
    slug: string;
    image: string | null;
    category: string;
    excerpt: string;
    publishedAt: string;
  }>;
}) {
  const [hoveredId, setHoveredId] = useState(null);
  
  // If no trending posts, show fallback
  if (!trendingPosts || trendingPosts.length === 0) {
    return (
      <div className="py-12 text-center">
        <h2 className="mb-6 text-2xl font-bold text-black">
          Trending <span className="text-red-600">News</span>
        </h2>
        <p className="text-gray-500">No trending articles available at the moment. Check back soon!</p>
      </div>
    );
  }

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-black">
            Trending <span className="text-red-600">News</span>
          </h2>
          <Link href="/blogs/category/trending" className="rounded-full bg-red-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-red-700">
            View All
          </Link>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {trendingPosts.map((post: {
            id: number;
            title: string;
            slug: string;
            image: string | null;
            category: string;
            excerpt: string;
            publishedAt: string;
          }) => (
            <motion.div 
              key={post.id}
              variants={cardVariants}
              whileHover="hover"
              onHoverStart={() => setHoveredId(post.id as unknown as null)}
              onHoverEnd={() => setHoveredId(null)}
            >
              <Link href={`/blogs/${post.slug}`} className="block h-full">
                <div className="h-full overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all">
                  <div className="relative h-52 w-full overflow-hidden bg-gray-200">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700"
                      style={{
                        transform: hoveredId === post.id ? 'scale(1.05)' : 'scale(1)'
                      }}
                    />
                    <div className="absolute left-4 top-4 rounded-full bg-red-600 px-3 py-1 text-xs font-medium text-white">
                      {post.category}
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="mb-2 text-lg font-semibold text-gray-900 line-clamp-2">{post.title}</h3>
                    <p className="mb-3 text-sm text-gray-600 line-clamp-3">
                      {post.excerpt || post.title}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">
                        {new Date(post.publishedAt).toLocaleDateString('en-US', {
                          month: 'short', 
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </span>
                      
                      <motion.span 
                        className="flex items-center text-sm font-medium text-red-600"
                        animate={{
                          x: hoveredId === post.id ? [0, 5, 0] : 0
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        Read More
                        <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </motion.span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}