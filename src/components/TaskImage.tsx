import Image from "next/image";
import React from "react";
import taskPic from "../../public/images/task_one.jpg";

const imageStyle = {
  borderRadius: '1%',
  border: '1px solid #fff',
}

const TaskImage = () => {
  return (
    <div>
      <Image
        src={taskPic}
        alt="Picture of the task"
        style={imageStyle}
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
    </div>
  );
};

export default TaskImage;
