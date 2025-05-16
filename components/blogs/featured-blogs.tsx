import Image from "next/image"
import Link from "next/link"
import { fetchFeaturedPosts } from "@/lib/api"

// This is for static generation with data
export async function getStaticProps() {
  const { featuredPost, sidebarPosts } = await fetchFeaturedPosts();
  
  return {
    props: {
      featuredPost,
      sidebarPosts,
    },
    // Revalidate every hour
    revalidate: 3600,
  };
}

export default function FeaturedBlogs({ 
  featuredPost, 
  sidebarPosts 
}: { 
  featuredPost?: { 
    id: number;
    title: string;
    slug: string;
    image: string;
  };
  sidebarPosts?: Array<{
    id: number;
    title: string;
    slug: string;
    image: string;
  }>;
}) {
  // Fallback content if no featured post is available
  const defaultPost = {
    id: 0,
    title: "No featured post available",
    slug: "#",
    image: "/placeholder.svg",
  };

  // Use featuredPost from API or fallback to default
  const mainPost = featuredPost || defaultPost;
  
  // Use sidebarPosts from API or empty array
  const sidePosts = sidebarPosts && sidebarPosts.length > 0 
    ? sidebarPosts 
    : [];

  return (
    <div className="mb-12">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {/* Main Featured Post */}
        <div className="md:col-span-2">
          <Link href={`/blogs/${mainPost.slug}`} className="block">
            <div className="relative h-[300px] w-full overflow-hidden rounded-md bg-gray-200 md:h-[400px]">
              <Image
                src={mainPost.image || "/placeholder.svg"}
                alt={mainPost.title}
                fill
                className="object-cover"
              />
            </div>
            <h2 className="mt-3 text-xl font-semibold text-black md:text-2xl">{mainPost.title}</h2>
          </Link>
        </div>

        {/* Sidebar Posts */}
        <div className="space-y-4">
          {sidePosts.map((post) => (
            <Link key={post.id} href={`/blogs/${post.slug}`} className="block">
              <div className="grid grid-cols-3 gap-3">
                <div className="relative h-20 w-full overflow-hidden rounded-md bg-gray-200">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                </div>
                <div className="col-span-2">
                  <h3 className="text-sm font-medium text-black">{post.title}</h3>
                </div>
              </div>
            </Link>
          ))}
          
          {/* Show placeholder items if fewer than 3 sidebar posts */}
          {sidePosts.length < 3 && Array.from({ length: 3 - sidePosts.length }).map((_, index) => (
            <div key={`placeholder-${index}`} className="grid grid-cols-3 gap-3">
              <div className="relative h-20 w-full overflow-hidden rounded-md bg-gray-100">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  <span>No image</span>
                </div>
              </div>
              <div className="col-span-2">
                <div className="h-4 w-full rounded bg-gray-100"></div>
                <div className="mt-2 h-4 w-2/3 rounded bg-gray-100"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}