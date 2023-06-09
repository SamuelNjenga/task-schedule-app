import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">Scheduled Tasks</h1>
        <Link href="/new">New</Link>
      </header>
      <ul></ul>
    </>
  );
}
