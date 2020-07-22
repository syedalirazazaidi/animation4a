import React from "react";
import "./App.css";
import Car from "./car";
import useWebAnimations from "@wellyshen/use-web-animations";
const App = () => {
  const { ref, getAnimation } = useWebAnimations({
    keyframes: [
      { transform: "translate(0,0)" },
      { transform: "translate(-2950px,0)" },
    ],
    timing: {
      delay: 500,
      duration: 8000,
      iterations: Infinity,
      easing: "linear",
    },
  });
  const speedUp = () => {
    const animation = getAnimation();
    animation.updatePlaybackRate(animation.playbackRate * 0.75);
  };

  return (
    <div className="container">
      <div className="night">
        <div className="surface" ref={ref} onClick={speedUp}></div>
      </div>
      <Car />
    </div>
  );
};
export default App;
