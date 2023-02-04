import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import SingleDog from "./components/SingleDog";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/:name" element={<SingleDog />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
