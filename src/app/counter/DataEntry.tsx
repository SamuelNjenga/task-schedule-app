"use client";
import { TextField } from "@mui/material";
import React, { useState } from "react";

const DataEntry = () => {
  const [isSamScore, setIsSamScore] = useState<boolean>(true);

  return (
    <div>
      {isSamScore ? <div>Sam's Score</div> : <div>Joe's Score</div>}
      <TextField key={isSamScore ? "sam" : "joe"} />
      <br />
      <button onClick={() => setIsSamScore((k) => !k)}>Swap</button>
    </div>
  );
};

export default DataEntry;
