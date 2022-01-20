import "./App.css";
import mobile from "./design/mobile-design.jpg";
import desktop from "./design/desktop-design.jpg";
import cube from "./images/image-equilibrium.jpg";
import coin from "./images/icon-ethereum.svg";
import clock from "./images/icon-clock.svg";
function App() {
  return (
    <div className="App">
      <img src={mobile} className="mobile-design" alt="mockup"></img>
      <img src={desktop} className="desktop-design" alt="mockup"></img>
      <div className="container">
        <div className="Card">
          <img src={cube} className="cube" />
          <h1 className="Name">Equilibrium #3429</h1>
          <p className="Info">
            Our Equilibrium collection promotes balance and calm.
          </p>
          <img src={coin} className="coin" />
          <p className="price"> 0.041ETH </p>
          <img src={clock} className="clock" />
        </div>
      </div>
    </div>
  );
}

export default App;
