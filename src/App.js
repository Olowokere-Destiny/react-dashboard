import "./App.css";
import Dashboard from "./components/dashboard/Dashboard";
import Layout from "./components/layout/Layout";
import NavBar from "./components/navbar/NavBar";
import { Routes, Route } from "react-router-dom";
import Transactions from "./components/transactions/Transactions";
import Settings from "./components/settings/Settings";
function App() {
  return (
    <div className="flex flex-col md:flex-row">
      <NavBar />
      <div className="App md:w-3/4">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Dashboard />} />
              <Route path="transactions" element={<Transactions />} />
              <Route path="settings" element={<Settings />} />
            </Route>
          </Routes>
      </div>
    </div>
  );
}

export default App;
