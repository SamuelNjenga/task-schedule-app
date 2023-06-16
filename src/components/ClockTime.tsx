import { format } from "date-fns";
import React from "react";

const ClockTime = () => {
  return (
    <div>
      <h4 className="font-sans text-lg font-medium text-sky-400/75 underline decoration-pink-500/30">
        The Current Time{" "}
      </h4>
      {format(new Date(new Date()), "h 'o''clock' MM/dd/yyyy")}
    </div>
  );
};

export default ClockTime;
