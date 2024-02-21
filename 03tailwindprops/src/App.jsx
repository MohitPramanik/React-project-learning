import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from './components/Card'

function App() {

  const [count, setCount] = useState(0);
  let myObj = {
    username: "mohit",
    age: 21
  }
  let newArr = [1,2,3]

  return (
    <>
      <h1 className="bg-green-400 p-4 rounded-xl text-black">Tailwind Test</h1>
      <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800 mb-4">
        <img
          className="w-24 h-24 rounded-full mx-auto"
          src="src/photo.jpg"
          alt=""
          width="384"
          height="512"
        />
        <div className="pt-6 text-center space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              “Tailwind CSS is the only framework that I've seen scale on large
              teams. It’s easy to customize, adapts to any design, and the build
              size is tiny.”
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">Sarah Dayan</div>
            <div className="text-slate-700 dark:text-slate-500">
              Staff Engineer, Algolia
            </div>
          </figcaption>
        </div>
      </figure>
      <Card username="chaiaurcode" btntext="Click me"/>
      <Card username="Mohit" btntext="Visit me"/>
      
    </>
  );
}

export default App;
