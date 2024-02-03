import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const togglemode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.Color = "black";
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#121212";
      document.body.style.Color = "white";
    }
  };
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} togglemode={togglemode} />
        <div className="container my-3">
          <Routes>
            <Route
              path="/"
              element={<TextForm heading="Enter your Text here" mode={mode} />}
            />
            <Route path="/About" element={<About mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
