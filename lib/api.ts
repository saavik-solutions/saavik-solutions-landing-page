// lib/api.js - Create this file to handle API requests

export async function fetchFeaturedPosts() {
    // Replace with your actual Strapi URL
    const strapiURL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
    
    try {
      // Fetch featured post (assuming you have a way to mark posts as featured in Strapi)
      const featuredRes = await fetch(`${strapiURL}/api/articles?filters[featured][$eq]=true&populate=image&sort[0]=publishedAt:desc&pagination[limit]=1`);
      const featuredData = await featuredRes.json();
      
      // Fetch sidebar posts (excluding the featured one)
      const sidebarRes = await fetch(`${strapiURL}/api/articles?filters[featured][$eq]=false&populate=image&sort[0]=publishedAt:desc&pagination[limit]=3`);
      const sidebarData = await sidebarRes.json();
      
      // Format the data to match your component's structure
      const featuredPost = featuredData.data[0] ? {
        id: featuredData.data[0].id,
        title: featuredData.data[0].attributes.title,
        slug: featuredData.data[0].attributes.slug,
        image: strapiURL + featuredData.data[0].attributes.image.data.attributes.url,
      } : null;
      
      const sidebarPosts = sidebarData.data.map((post: { id: string; attributes: { title: string; slug: string; image: { data: { attributes: { url: string } } | null } } }) => ({
        id: post.id,
        title: post.attributes.title,
        slug: post.attributes.slug,
        image: post.attributes.image.data ? strapiURL + post.attributes.image.data.attributes.url : null,
      }));
      
      return { featuredPost, sidebarPosts };
    } catch (error) {
      console.error("Error fetching posts:", error);
      return { featuredPost: null, sidebarPosts: [] };
    }
  }