import React from "react";
import "../styles/LanguageSelection.css";

const LanguageSelection = () => {
    return (
        <div className="language-container">
            <h2>Invoices</h2>
            <select>
                <option>Aerteria</option>
                <option>Arlarat Dramos</option>
                <option>English</option>
            </select>
            <button>Cancel</button>
        </div>
    );
};

export default LanguageSelection;
