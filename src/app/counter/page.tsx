"use client";
import { Button } from "@mui/material";
import React, { useState } from "react";
import Counter from "./Counter";
import DataEntry from "./DataEntry";

const CounterPage = () => {
  const [isReact, setIsReact] = useState<boolean>(true);
  return (
    <div>
      <header>This my counter</header>
      {isReact ? (
        <Counter name="ReactJs" key="reactjs" />
      ) : (
        <Counter name="Other" key="other" />
      )}
      <br />
      <Button
        variant="contained"
        color="success"
        onClick={() => setIsReact((k) => !k)}
      >
        Swap
      </Button>
      <br />
      <DataEntry />
    </div>
  );
};

export default CounterPage;
