import "./styles/normalize.css";
import { Routes, Route } from "react-router-dom";
import { Post } from "./pages/Post";
import { Side } from "./pages/Side";
import { Form } from "./pages/Form";
import { Home } from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/post" element={<Post />} />
      <Route path="/side" element={<Side />} />
      <Route path="/form" element={<Form />} />
    </Routes>
  );
}

export default App;
