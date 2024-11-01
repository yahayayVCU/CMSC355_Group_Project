import React, { useState } from "react";
import './therapist.css';

const FindTherapistPage = () => {
  const [selectedState, setSelectedState] = useState("");
  const [therapists, setTherapists] = useState([]);

  const therapistLinks = {
    California: [
      { name: "Therapist A", link: "https://www.californiatherapistA.com" },
      { name: "Therapist B", link: "https://www.californiatherapistB.com" },
    ],
    Texas: [
      { name: "Therapist C", link: "https://www.texastherapistC.com" },
      { name: "Therapist D", link: "https://www.texastherapistD.com" },
    ],
    Florida: [
      { name: "Therapist E", link: "https://www.floridatherapistE.com" },
      { name: "Therapist F", link: "https://www.floridatherapistF.com" },
    ],
  };

  const handleStateChange = (e) => {
    const state = e.target.value;
    setSelectedState(state);
    setTherapists(therapistLinks[state] || []);
  };

  return (
    <div className="find-therapist-container">
      <h1>Find a Therapist</h1>
      <p>Select your state to find therapists near you:</p>
      <select
        value={selectedState}
        onChange={handleStateChange}
        className="state-dropdown"
      >
        <option value="">Select a state</option>
        <option value="California">California</option>
        <option value="Texas">Texas</option>
        <option value="Florida">Florida</option>
      </select>
      <div className="therapist-links">
        {therapists.length > 0 ? (
          therapists.map((therapist, index) => (
            <a
              key={index}
              href={therapist.link}
              target="_blank"
              rel="noopener noreferrer"
              className="therapist-link"
            >
              {therapist.name}
            </a>
          ))
        ) : (
          selectedState && <p>No therapists found in this state.</p>
        )}
      </div>
    </div>
  );
};

export default FindTherapistPage;
