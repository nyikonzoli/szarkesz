import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${"/miki.jpg"})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "black",
        height: "100vh",
        width: "100vw",
      }}
    ></div>
  );
}

export default App;
