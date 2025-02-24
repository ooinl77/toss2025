import Lottie from "lottie-react";
import animationData from "./assets/animation.json";
import coin from "./assets/coin.png";

export default function App() {
  return (
    <div style={{ position: "relative", width: 300, height: 300 }}>
      {/* PNG 캐릭터 (배경) */}
      <img
        src={coin}
        alt="coin"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          zIndex: 1,
        }}
      />

      {/* Lottie 애니메이션 (앞쪽) */}
      <Lottie
        animationData={animationData}
        loop
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          zIndex: 2,
        }}
      />
    </div>
  );
}
