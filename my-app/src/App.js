import "./App.css";
import Button from "react-bootstrap/Button";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Button variant="secondary">Secondary</Button>
    </div>
  );
}

export default App;
