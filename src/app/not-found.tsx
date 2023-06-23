import NotFoundAnimation from "@/components/NotFoundAnimation";
import { Vollkorn } from "next/font/google";
import Link from "next/link";

const vollkorn = Vollkorn({
  weight: "600",
  subsets: ["latin"],
  display: "swap",
});

export default function NotFound() {
  return (
    <div className="flex items-center justify-center flex-col">
      <h2 className={vollkorn.className}>Not Found</h2>
      <p className={vollkorn.className}>Could not find requested resource</p>
      <NotFoundAnimation />
      <Link href="/">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-2 rounded">
          Go To Homepage
        </button>
      </Link>
    </div>
  );
}
