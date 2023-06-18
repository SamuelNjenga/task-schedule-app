import ClockTime from "@/components/ClockTime";
import TaskImage from "@/components/TaskImage";
import { TodoItem } from "@/components/TodoItem";
// import { redirect } from "next/navigation";
import { UserItem } from "@/components/UserItem";
import { prisma } from "@/db";
import Link from "next/link";

function getTodos() {
  return prisma.todo.findMany();
}

function getUsers() {
  return prisma.user.findMany();
}

async function toggleTodo(id: string, complete: boolean) {
  "use server";
  await prisma.todo.update({ where: { id }, data: { complete } });
  // redirect("") -> cannot perform a redirect in this server action
}

export default async function Home() {
  const todos = await getTodos();
  const users = await getUsers();

  // await prisma.todo.create({data: {title: "test", complete:false}})
  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">Scheduled Tasks</h1>
        <Link
          className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          href="/new"
        >
          Tasks
        </Link>
        <Link
          className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          href="/users"
        >
          Users
        </Link>
        <Link
          className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          href="/posts"
        >
          Posts
        </Link>
        <Link
          className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          href="/tweets"
        >
          Tweets
        </Link>
      </header>
      <h3>Tasks</h3>
      <ul className="pl-4">
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} />
        ))}
      </ul>
      <h3>Users</h3>
      <ul className="pl-4">
        {users.map((user) => (
          <UserItem key={user.id} {...user} />
        ))}
      </ul>
      <ClockTime />
      <TaskImage />
    </>
  );
}
