import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import HomePage from "./pages/HomePage";

const App = () => {
  // return <h1 class="bg-red-900 text-white">hello world</h1>;
  return (
    <Router>
      <div className="container mx-auto">
        {/* <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} /> */}
        <Routes>
          <Route
            path="/"
           Component={HomePage}
          />
          {/* <Route path='/about' Component={About} /> */}
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
};

export default App;
