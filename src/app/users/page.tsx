import { prisma } from "@/db";
import Link from "next/link";
import { redirect } from "next/navigation";

// server action concept implemented
async function createUser(data: FormData) {
  "use server";
  const firstName = data.get("firstName")?.valueOf();
  if (typeof firstName !== "string" || firstName.length === 0) {
    throw new Error("Invalid firstName");
  }

  const lastName = data.get("lastName")?.valueOf();
  if (typeof lastName !== "string" || lastName.length === 0) {
    throw new Error("Invalid lastName");
  }

  const email = data.get("email")?.valueOf();
  if (typeof email !== "string" || email.length === 0) {
    throw new Error("Invalid email");
  }

  await prisma.user.create({ data: { firstName, lastName, email } });

  redirect("/users/registration");
}
export default function Page() {
  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">Users </h1>
      </header>
      <form action={createUser} className="flex gap-2 flex-col">
        <input
          type="text"
          name="firstName"
          placeholder="Enter your first name"
          className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
        />
        <input
          type="text"
          name="lastName"
          placeholder="Enter your last name"
          className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
        />
        <div className="flex gap-1 justify-end">
          <Link
            href=".."
            className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          >
            Register
          </button>
        </div>
      </form>
    </>
  );
}
