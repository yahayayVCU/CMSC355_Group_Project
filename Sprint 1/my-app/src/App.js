import React, { useState } from "react";
import './App.css';
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import FindTherapist from "./findTherapist/therapist";
import Hobbies from "./hobbies/hobbies";
import Resources from "./resources/resources";
import JournalPage from "./journal/journal";
import MoodPage from "./mood/mood";
import ToDoPage from "./todo/todo";
import ChatPage from "./chat/chat";

function App() {
  const [showResourcesPopup, setShowResourcesPopup] = useState(false);
  const [showJournalPopup, setShowJournalPopup] = useState(false);
  const navigate = useNavigate();

  const toggleResourcesPopup = () => {
    setShowResourcesPopup(!showResourcesPopup);
  };

  const toggleJournalPopup = () => {
    setShowJournalPopup(!showJournalPopup);
  };

  const goToChat = () => {
    navigate("/chat"); // Navigate to the chat page
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Mental Support</h1>
      </header>
      
      <div className="button-container">
        <button onClick={toggleResourcesPopup} className="btn">Resources</button>
        <button onClick={toggleJournalPopup} className="btn">Journal</button>
        <button onClick={goToChat} className="btn">Chat</button> {/* Chat button */}
        {/* <button className="btn">Chat</button> */}
      </div>

      {/* Pop-up menu for Resources button */}
      {showResourcesPopup && (
        <div className="popup">
          <h3>Resources</h3>
          <ul>
            <li>
              <Link to="/findTherapist" onClick={toggleResourcesPopup}>Find Therapist</Link>
            </li>
            <li>
              <Link to="/hobbies" onClick={toggleResourcesPopup}>Hobbies</Link>
            </li>
            <li>
              <Link to="/resources" onClick={toggleResourcesPopup}>Resources</Link>
            </li>
          </ul>
          <button onClick={toggleResourcesPopup} className="close-popup">Close</button>
        </div>
      )}

      {/* Pop-up menu for Journal button */}
      {showJournalPopup && (
        <div className="popup">
          <h3>Journal Options</h3>
          <ul>
            <li>
              <Link to="/journal" onClick={toggleJournalPopup}>Journal</Link>
            </li>
            <li>
              <Link to="/mood" onClick={toggleJournalPopup}>Mood</Link>
            </li>
            <li>
              <Link to="/todo" onClick={toggleJournalPopup}>To-Do</Link>
            </li>
          </ul>
          <button onClick={toggleJournalPopup} className="close-popup">Close</button>
        </div>
      )}

      <Routes>
        <Route path="/findTherapist" element={<FindTherapist />} />
        <Route path="/hobbies" element={<Hobbies />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/journal" element={<JournalPage />} />
        <Route path="/mood" element={<MoodPage />} />
        <Route path="/todo" element={<ToDoPage />} />
        <Route path="/chat" element={<ChatPage />} />
      </Routes>
    </div>
  );
}

export default App;
