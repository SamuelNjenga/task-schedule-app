import React from "react";
import { useLocalStorage } from "usehooks-ts";

interface CounterProps {
  name: string;
}

const Counter = ({ name }: CounterProps) => {
  const [count, setCount] = useLocalStorage(name, 0);
  return (
    <div>
      <div className="font-bold">{name}</div>
      <button onClick={() => setCount((c) => c - 1)} className="mr-4">
        -
      </button>
      {count}
      <button onClick={() => setCount((c) => c + 1)} className="ml-4">
        +
      </button>
    </div>
  );
};

export default Counter;
