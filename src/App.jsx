import "./App.css";

import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Footer } from "./Footer";
import { MainArea } from "./MainArea";

import { useState } from "react";

export function App() {
  // "Named export"
  // React-Hooks definieren
  const [year, setYear] = useState("");
  const [place, setPlace] = useState("");
  const [group, setGroup] = useState("");

  // hier unten React-Hooks "vererben / weitergeben"
  // z.B. side={side} setSide={setSide}
  return (
    <div className="app-container">
      <Header />
      <div className="main-container">
        <MainArea />
        <Sidebar
          year={year}
          setYear={setYear}
          place={place}
          setPlace={setPlace}
          group={group}
          setGroup={setGroup}
        />
      </div>
      <Footer />
    </div>
  );
}

// export default App; // "Default export" -> in main.jsx anpassen!
