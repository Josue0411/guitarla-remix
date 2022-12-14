import { getPosts } from "~/models/posts.server";
import { useLoaderData } from "@remix-run/react";
import Post from "~/components/post";
import style from "~/styles/blog.css";
export function meta (){
  return {
    title: 'GuitarLA - nuestro Blog',
    description: 'GuitarLA, Blog de musica y venta de guitarras'
  }
}
export function links() {
  return [
    {
      rel: "stylesheet",
      href: style,
    },
  ];
}
export async function loader() {
  const posts = await getPosts();
  console.log(posts);
  return posts.data;
}
function Blog() {
  const posts = useLoaderData();

  return (
    <main className="contenedor">
      <h2 className="heading">Blog</h2>
      <div className="blog">
        {posts.map((post) => (
          <Post key={post.id} post={post.attributes} />
        ))}
      </div>
    </main>
  );
}

export default Blog;
