import { useState } from "react";
import "./App.css";

function Header() {
  return (
    <header>
      <h1>React Essentials</h1>
    </header>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header/>
      <main>
        <h2>Time to get start!</h2>
      </main>
    </div>
  );
}

export default App;
