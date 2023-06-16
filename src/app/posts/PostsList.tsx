import { Rubik } from "next/font/google";
import Link from "next/link";
import React from "react";
import { API_BASE_URL } from "./../../constants/index";

const rubik = Rubik({
  weight: "500",
  subsets: ["latin"],
  display: "swap",
});

interface Post {
  id: number;
  title: string;
}

const fetchPosts = async (): Promise<Post[]> => {
  const res = await fetch(`${API_BASE_URL}posts/`);
  const posts = await res.json();
  return posts;
};

async function PostsList() {
  const posts = await fetchPosts();
  return (
    <>
      {posts.map((post) => (
        <p key={post.id} className={rubik.className}>
          <Link href={`/posts/${post.id}`}>
            Post: {post.id} {post.title}
          </Link>
        </p>
      ))}
      <Link href="">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-2 rounded">
          Go To Homepage
        </button>
      </Link>
    </>
  );
}

export default PostsList;
