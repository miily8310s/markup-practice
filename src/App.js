import "./styles/normalize.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Top } from "./pages/Top";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/top" element={<Top />} />
    </Routes>
  );
}

export default App;
