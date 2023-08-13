import DancerAnimation from "@/components/DancerAnimation";
import PhoneAnimation from "@/components/PhoneAnimation";
import WalkerAnimation from "@/components/WalkerAnimation";
import { Lora } from "next/font/google";
import Link from "next/link";
import React from "react";

const lora = Lora({
  weight: "600",
  subsets: ["latin"],
  display: "swap",
});

const PhonePage = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <h2 className={lora.className}>The Phone Animation</h2>
      <PhoneAnimation />
      <br />
      <WalkerAnimation />
      <br />
      <DancerAnimation />
      <Link href="">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-2 rounded">
          Go To Homepage
        </button>
      </Link>
    </div>
  );
};

export default PhonePage;
