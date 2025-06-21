import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Headers from "./components/Headers";
import Footers from "./components/Footers";
import Login from "./components/UserModule/Login";
import Signup from "./components/UserModule/Signup";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Headers />
      <Signup />
      <Footers />
    </>
  );
}

export default App;
