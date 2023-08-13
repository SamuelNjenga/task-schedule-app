"use client";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import React, { useRef } from "react";
import animationData from "../../public/assets/dancer.json";

const DancerAnimation = () => {
  const notFoundRef = useRef<LottieRefCurrentProps>(null);
  return (
    <div className="w-64">
      <Lottie
        animationData={animationData}
        lottieRef={notFoundRef}
        onComplete={() => {
          console.log("Complete");
          //   phoneRef.current?.goToAndPlay(15, true)
          //   phoneRef.current?.setDirection(-1);
          // notFoundRef.current?.stop();
        }}
        loop={true}
      />
    </div>
  );
};

export default DancerAnimation;
