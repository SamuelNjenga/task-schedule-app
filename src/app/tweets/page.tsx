import ThankyouAnimation from "@/components/ThankyouAnimation";
import TweetItem from "@/components/TweetItem";
import TwitterAnimation from "@/components/TwitterAnimation";
import React from "react";

const page = () => {
  return (
    <div>
      <header className="mb-4">
        <h1 className="text-2xl">Tweets Page</h1>
        <TwitterAnimation />
        <TweetItem />
        <ThankyouAnimation />
      </header>
    </div>
  );
};

export default page;
