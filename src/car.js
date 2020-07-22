import React from "react";
import useWebAnimations from "@wellyshen/use-web-animations";
import carImg from "./images/assets/Img_06.png";
const Car = () => {
  const { ref, getAnimation } = useWebAnimations({
    keyframes: [
      { transform: "translate(0px,-1px)" },
      { transform: "translate(0px,3px)" },
      { transform: "translate(0px,-2px)" },
    ],
    timing: {
      delay: 500,
      duration: 4000,
      iterations: Infinity,
      easing: "linear",
    },
  });
  const speedUp = () => {
    const animation = getAnimation();
    animation.updatePlaybackRate(animation.playbackRate * 75);
  };

  return (
    <div className="car">
      <img src={carImg} alt="" ref={ref} onClick={speedUp} />
    </div>
  );
};
export default Car;
