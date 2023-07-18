import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import NavigationMenu from "./JS files/NavigationMenu";
import Navigation from "./JS files/TopNavigation";
import LoginPage from "./JS files/LoginPage";
import Firmware from "./JS files/Firmware";
import PushFota from "./JS files/PushFota";

function App() {
  const items = [
    { id: 1, version: "1.0", filename: "file1.txt" },
    { id: 2, version: "1.0", filename: "file2.txt" },
    { id: 3, version: "1.0", filename: "file3.txt" },
    { id: 3, version: "1.0", filename: "file3.txt" },
    { id: 3, version: "1.0", filename: "file3.txt" },
    { id: 3, version: "1.0", filename: "file3.txt" },
  ];

  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Navigation />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<NavigationMenu />} />
        <Route path="/firmware" element={<Firmware items={items} />} />
        <Route path="/pushfota" element={<PushFota items={items} />} />
      </Routes>
    </div>
  );
}

export default App;
