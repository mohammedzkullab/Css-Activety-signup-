import Row from "./components/layout/Row";
import LeftCol from "./components/UI/LeftCol";
import RightCol from "./components/UI/RightCol";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Row>
        <LeftCol />
        <RightCol />
      </Row>
    </div>
  );
}

export default App;
