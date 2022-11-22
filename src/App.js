import logo from "./logo.svg";
import "./App.css";
import CustomSelect from "./components/selector";

function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100%",
        background:
          "linear-gradient(to right, #3a7bd5 0%, #3a6073  51%, #3a7bd5  100%)",
      }}
    >
      <div className="main-content" style={{ width: "600px" }}>
        <CustomSelect />
      </div>
    </div>
  );
}

export default App;
