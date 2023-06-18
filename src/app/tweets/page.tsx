import TweetItem from "@/components/TweetItem";
import React from "react";

const page = () => {
  return (
    <div>
      <header className="mb-4">
        <h1 className="text-2xl">Tweets Page</h1>
        <TweetItem />
      </header>
    </div>
  );
};

export default page;
