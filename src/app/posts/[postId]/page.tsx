import { API_BASE_URL } from "@/constants";
import { notFound } from "next/navigation";
import React from "react";

interface Post {
  id: number;
  title: string;
}

export async function generateStaticParams() {
  const data = await fetch(`${API_BASE_URL}posts/`);
  const res = await data.json();
  return res.map((post: Post) => ({ post: post.id }));
}

const fetchPost = async (postId: number) => {
  const res = await fetch(`${API_BASE_URL}posts/${postId}`);
  const post = await res.json();
  console.log("post", post);
  return post;
};

export default async function PostPage({
  params: { postId },
}: {
  params: { postId: number };
}) {
  const post = await fetchPost(postId);
  if (!post.id) return notFound();
  return (
    <div className="p-10 bg-black-200 bottom-2 m-2 shadow-lg">
      <p>
        #{post.id}: {post.title}
      </p>
      <p>Body: {post.body}</p>
    </div>
  );
}
