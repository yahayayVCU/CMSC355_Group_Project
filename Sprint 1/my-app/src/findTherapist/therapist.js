import React, { useState } from "react";
import './therapist.css';

const FindTherapistPage = () => {
  const [selectedState, setSelectedState] = useState("");
  const [therapists, setTherapists] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const therapistLinks = {
    California: [
      { name: "Therapist A", link: "https://www.growtherapy.com" },
      { name: "Therapist B", link: "https://www.zencare.com" },
    ],
    Texas: [
      { name: "Therapist C", link: "https://www.texastherapistC.com" },
      { name: "Therapist D", link: "https://www.texastherapistD.com" },
    ],
    Florida: [
      { name: "Therapist E", link: "https://www.floridatherapistE.com" },
      { name: "Therapist F", link: "https://www.floridatherapistF.com" },
    ],
    Other: []  // Added "Other" to therapistLinks
  };

  const handleStateChange = (e) => {
    const state = e.target.value;
    setSelectedState(state);

    if (state === "Other") {
      setTherapists([]);
      setErrorMessage("Sorry, we don't have information about other states. Please select from the states provided: California, Texas, or Florida.");
    } else {
      setTherapists(therapistLinks[state] || []);
      setErrorMessage("");
    }
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
        <option value="Other">Other State</option>
      </select>
      <div className="therapist-links">
        {errorMessage ? (
          <p className="error-message">{errorMessage}</p>
        ) : (
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
        )}
      </div>
    </div>
  );
};

export default FindTherapistPage;
