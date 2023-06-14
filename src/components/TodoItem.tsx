"use client";
import { Raleway } from "next/font/google";

type TodoItemProps = {
  id: string;
  title: string;
  complete: boolean;
  toggleTodo: (id: string, complete: boolean) => void;
};

const raleway = Raleway({
  weight: "500",
  subsets: ["latin"],
  display: "swap",
});

export function TodoItem({ id, title, complete, toggleTodo }: TodoItemProps) {
  return (
    <li className="flex gap-1 items-center">
      <input
        id={id}
        type="checkbox"
        className="cursor-pointer peer"
        defaultChecked={complete}
        onChange={(e) => toggleTodo(id, e.target.checked)}
      />
      <label
        htmlFor={id}
        className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500"
      >
        <h4 className={raleway.className}>{title}</h4>
      </label>
    </li>
  );
}
