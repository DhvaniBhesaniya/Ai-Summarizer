import Hero from "./components/Hero";
import Demo from "./components/Demo";

import "./App.css";

const App = () => {
  console.log("App component rendered");
  return (
    <div>
      <main>
        <div className="main">
          <div className="gradient"></div>
        </div>
        <div className="app">
          <Hero />
          <Demo />
        </div>
      </main>
    </div>
  );
};

export default App;
