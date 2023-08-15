import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import Layout from "./pages/Layout";
import RequireAuth from "./components/RequireAuth";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public route */}
        <Route path="/" element={<HomePage />} />
        {/* protect these routes */}
        <Route element={<RequireAuth />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
