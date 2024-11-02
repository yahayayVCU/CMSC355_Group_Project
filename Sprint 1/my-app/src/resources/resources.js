// resources.js

import React, { useState } from "react";
import './resources.css';

// Import data from separate modules
import activities from './data/activities';
import gyms from './data/gyms';
import parks from './data/parks';
import tips from './data/tips';

export default function Resources() {
    // Combine all resources into a single array
    const [resources] = useState([
        ...activities,
        ...gyms,
        ...parks,
        ...tips,
    ]);

    const [selectedState, setSelectedState] = useState("");

    const pluralCategories = {
        Activity: "Activities",
        Gym: "Gyms",
        Park: "Parks",
        Tip: "Tips",
    };

    const categories = ["Activity", "Gym", "Park", "Tip"];

    const handleExplore = (title) => {
        console.log(`Exploring ${title}`);
    };

    const handleStateChange = (e) => {
        setSelectedState(e.target.value);
    };

    const availableStates = ["California", "Texas", "Florida"];

    return (
        <div className="resources-container">
            <h1>Resources</h1>
            <h2>Other Resources</h2>
            <div className="state-dropdown">
                <label htmlFor="state-select">Select State:</label>
                <select id="state-select" value={selectedState} onChange={handleStateChange}>
                    <option value="">Select a state</option>
                    {availableStates.map((state) => (
                        <option key={state} value={state}>
                            {state}
                        </option>
                    ))}
                </select>
            </div>

            {/* Conditional Rendering Based on State Selection */}
            {selectedState ? (
                <>
                    <nav className="resource-nav">
                        {categories.map((category) => (
                            <a key={category} href={`#${category.toLowerCase()}`}>
                                {pluralCategories[category]}
                            </a>
                        ))}
                    </nav>
                    {categories.map((category) => (
                        <section key={category} id={category.toLowerCase()}>
                            <h3>{pluralCategories[category]}</h3>
                            <div className="resource-list">
                                {resources
                                    .filter(resource => {
                                        if (category === "Tip") return true;
                                        return resource.state === selectedState;
                                    })
                                    .filter(resource => resource.type === category)
                                    .slice(0, 3)
                                    .map((resource, index) => (
                                        <div key={index} className="resource-card">
                                            {resource.image && (
                                                <img src={resource.image} alt={resource.title} />
                                            )}
                                            <h4>{resource.title}</h4>
                                            <p>{resource.description}</p>
                                            {category === "Activity" && (
                                                <button onClick={() => handleExplore(resource.title)}>
                                                    Explore Activities
                                                </button>
                                            )}
                                            <a href={resource.link} target="_blank" rel="noopener noreferrer">
                                                Link
                                            </a>
                                        </div>
                                    ))}
                            </div>
                        </section>
                    ))}
                </>
            ) : (
                <p className="select-location-message">Select a location</p>
            )}
        </div>
    );
}