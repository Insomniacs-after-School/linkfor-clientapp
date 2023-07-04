import React from "react";
import { Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Routers from "./routes/Route";

const App = () => {
  return (
    < BrowserRouter>
      <Routes>
        {Routers.map((router, index)=> {
          return <Route path={router.path} element={router.element} key={index} />
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
