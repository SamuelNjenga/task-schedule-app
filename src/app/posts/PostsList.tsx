import React from "react";
import { API_BASE_URL } from "./../../constants/index";

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
        <p key={post.id}>
          Post: {post.id} {post.title}
        </p>
      ))}
    </>
  );
}

export default PostsList;
