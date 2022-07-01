import Datapad from "./Components/Datapad";
import "./App.css";

function App() {
  return (
    <div className="App mt-5">
      <div className="container py-5">
        <h1>
          Bright Suns / Rising Moons,
          <br />
          Galactic Traveller!
        </h1>

        <h3>What is it you are looking for today?</h3>

        <Datapad />
      </div>
    </div>
  );
}

export default App;
