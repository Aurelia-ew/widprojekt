//import { useState } from "react"; // wird bei React-Hooks benötigt
import "./App.css";

import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Footer } from "./Footer";
import { MainArea } from "./MainArea";

export function App() {
  // "Named export"
  // React-Hooks definieren

  // hier unten React-Hooks "vererben / weitergeben"
  return (
    <div className="app-container">
      <Header />
      <div className="main-container">
        <MainArea />
        <Sidebar />
      </div>
      <Footer />
    </div>
  );
}

// export default App; // "Default export" -> in main.jsx anpassen!
