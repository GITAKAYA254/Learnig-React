import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-3xl bg-green-500 p-3">Vite with tailwind</h1>
      <Card username="MIKE" post="software engineer" />
      <Card username="John" post="Robotics engineer" />
      <Card username="Betty" post="UI/UX designer" />
    </>
  );
}

export default App;
