import { Metadata } from "next";
import React from 'react';
import PostsList from './PostsList';

export const metadata: Metadata = {
  title: "Posts",
};

const Posts = () => {
  return (
    <div>
      <header>Posts List</header>
      <PostsList />
    </div>
  )
}

export default Posts
