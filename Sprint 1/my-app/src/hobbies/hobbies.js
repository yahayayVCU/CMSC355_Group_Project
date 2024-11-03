import React, { useState, useEffect } from "react";
import './hobbies.css';

const HobbiesListPage = () => {
  const [hasError, setHasError] = useState(false);

  const hobbies = [
    "Walking",
    "Running",
    "Swimming",
    "Football",
    "Basketball",
    "Fishing",
    "Gardening",
    "Tennis",
    "Painting",
    "Writing",
    "Photography",
    "Sewing",
    "Knitting",
    "Reading",
    "Puzzles",
    "Gaming",
    "Music",
    "Scrapbooking",
    "Cooking",
    "Bird-Watching",
    "Journaling",
    "Model Building",
    "Singing",
    "Yoga",
    "Baking",
    "Meditating"
  ];

  useEffect(() => {
    // Check if the page has been refreshed
    const hasRefreshed = sessionStorage.getItem('hasRefreshed');

    if (hasRefreshed) {
      // If refreshed, show the hobbies list and remove the flag
      setHasError(false);
      sessionStorage.removeItem('hasRefreshed');
    } else {
      // If not refreshed, show the error message
      setHasError(true);
    }

    // Add event listener to set the flag before the page unloads
    const handleBeforeUnload = () => {
      sessionStorage.setItem('hasRefreshed', 'true');
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return (
    <div className="hobbies-list-container">
      <h1>List of Hobbies to Try</h1>
      {hasError ? (
        <div className="error-message">
          <p>Data Fetching Error</p>
          <p>Please stand by or refresh the page to see the hobbies.</p>
        </div>
      ) : (
        <ul className="hobbies-list">
          {hobbies.map((hobby, index) => (
            <li key={index} className="hobby-item">{hobby}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HobbiesListPage;
