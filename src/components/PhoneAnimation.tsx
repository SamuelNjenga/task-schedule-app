"use client";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import React, { useRef } from "react";
import animationData from "../../public/assets/phone-animation.json";

const PhoneAnimation = () => {
  const phoneRef = useRef<LottieRefCurrentProps>(null);
  return (
    <div>
      <Lottie
        animationData={animationData}
        lottieRef={phoneRef}
        onComplete={() => {
          console.log("Complete");
          //   phoneRef.current?.goToAndPlay(15, true)
          //   phoneRef.current?.setDirection(-1);
          //   phoneRef.current?.play();
        }}
        //   loop={false}
        loop={false}
      />
    </div>
  );
};

export default PhoneAnimation;
