"use client";
import { InfinitySpin } from "react-loader-spinner";

export default function Loading() {
  return (
    <div className="h-screen flex items-center justify-center">
      <InfinitySpin width="200" color="#4fa94d" />
    </div>
  );
}
