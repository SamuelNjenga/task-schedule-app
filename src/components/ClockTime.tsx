// import { format } from "date-fns";
import moment from "moment";
import React from "react";

const ClockTime = () => {
  return (
    <div>
      <h4 className="font-sans text-lg font-medium text-sky-400/75 underline decoration-pink-500/30">
        The Current Time{" "}
      </h4>
      {/* {format(new Date(new Date()), "h 'o''clock' MM/dd/yyyy")} */}
      {moment(new Date()).format("MMMM Do YYYY, h:mm:ss a")}
    </div>
  );
};

export default ClockTime;
