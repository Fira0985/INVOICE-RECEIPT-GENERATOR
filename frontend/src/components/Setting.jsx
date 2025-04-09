import React from "react";
import "../styles/SettingsPage.css";

const SettingsPage = (props) => {
    return (
        <div className="dashboard-container">
            <main className="dashboard-main">
                <div className="dashboard-header">
                    <h1>Settings</h1>
                    <span className="user-info">{props.name} | English</span>
                </div>

                <div className="settings-content">
                    <form className="settings-form">
                        <label>Language:
                            <select>
                                <option>English</option>
                                <option>Amharic</option>
                            </select>
                        </label>
                        <label>Currency:
                            <select>
                                <option>USD</option>
                                <option>ETB</option>
                            </select>
                        </label>
                        <button type="submit">Save Settings</button>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default SettingsPage;
