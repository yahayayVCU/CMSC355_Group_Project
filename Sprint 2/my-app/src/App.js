import React, { useState } from "react";
import './App.css';
import { Link, Routes, Route } from "react-router-dom";
import FindTherapist from "./findTherapist/therapist";
import Hobbies from "./hobbies/hobbies";
import Resources from "./resources/resources";

function App() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Mental Support</h1>
      </header>
      
      {/* Ensure the button container is displayed below the header */}
      <div className="button-container">
        <button onClick={togglePopup} className="btn">Resources</button>
        <button className="btn">Journal</button>
        <button className="btn">Chat</button>
      </div>

      {/* Pop-up menu for Resources button */}
      {showPopup && (
        <div className="popup">
          <h3>Resources</h3>
          <ul>
            <li>
              <Link to="/findTherapist" onClick={togglePopup}>Find Therapist</Link>
            </li>
            <li>
              <Link to="/hobbies" onClick={togglePopup}>Hobbies</Link>
            </li>
            <li>
              <Link to="/resources" onClick={togglePopup}>Resources</Link>
            </li>
          </ul>
          <button onClick={togglePopup} className="close-popup">Close</button>
        </div>
      )}

      {/* Routes for each linked page */}
      <Routes>
        <Route path="/findTherapist" element={<FindTherapist />} />
        <Route path="/hobbies" element={<Hobbies />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </div>
  );
}

export default App;
