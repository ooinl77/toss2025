import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Ex2 from "./Ex02";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Ex2></Ex2>
    </>
  );
}

export default App;
