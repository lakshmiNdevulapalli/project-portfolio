import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"
import Particles from "react-particles-js";
import NavBar from "./components/NavBar"
import Header from "./components/Header"

function App() {
  return (
    <>
    <Particles 
      className="particles-canvas"
      params={{
        particles: {
          number: {
            value: 30,
            density: {
              enable: true,
              value_area: 900
            }
          },
          shape: {
            type: "square",
            stroke: {
              width: 6,
              color: "#fff"
            }
          }
        }
      }}
    />
    <NavBar />
    <Header />
    </>
  );
}

export default App;
