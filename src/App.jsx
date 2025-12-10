import "./App.css";

import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Footer } from "./Footer";
import { MainArea } from "./MainArea";

import { useState } from "react";

export function App() {
  // "Named export"
  // React-Hooks definieren
  const [year, setYear] = useState("2024");
  const [location_id, setLocation] = useState(331);
  const [group, setGroup] = useState("adult");
  const [info, setInfo] = useState(false);

  // hier unten React-Hooks "vererben / weitergeben"
  // z.B. side={side} setSide={setSide}
  return (
    <div className="app-container">
      <Header
        info={info}
        setInfo={setInfo}
        location_id={location_id}
        group={group}
      />
      <div className="main-container">
        <MainArea year={year} location_id={location_id} group={group} />
        <Sidebar
          year={year}
          setYear={setYear}
          location_id={location_id}
          setLocation={setLocation}
          group={group}
          setGroup={setGroup}
        />
      </div>
      <Footer />
    </div>
  );
}

// export default App; // "Default export" -> in main.jsx anpassen!
