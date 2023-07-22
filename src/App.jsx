import React from "react";
import { Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Routers from "./routes/Route";
import { AuthProvider } from "./context/AuthProvider";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {Routers.map((router, index) => {
            return (
              <Route path={router.path} element={router.element} key={index} />
            );
          })}
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
