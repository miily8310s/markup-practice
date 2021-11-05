import "./styles/normalize.css";
import { Routes, Route } from "react-router-dom";
import { Post } from "./pages/Post";
import { Side } from "./pages/Side";
import { Home } from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/post" element={<Post />} />
      <Route path="/side" element={<Side />} />
    </Routes>
  );
}

export default App;
