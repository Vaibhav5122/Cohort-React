import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-gray-900 w-full h-screen text-gray-50">
      <Header />
      <h1 className="flex align-middle font-semibold justify-center pt-20 text-3xl">
        Todays Random Laugh
      </h1>
      <Card />
    </div>
  );
}

export default App;
