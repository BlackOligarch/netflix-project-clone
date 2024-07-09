import React from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";

function App() {

  return (
    <div className="app">
      <Router>

          <Routes>
          <Route path="/signup" element={<LoginScreen />} />
            <Route path="/" element={<HomeScreen />}/>
          </Routes>


    </Router>

    </div>
  );
}

export default App;
