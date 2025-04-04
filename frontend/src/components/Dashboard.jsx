import React from "react";
import "../styles/Dashboard.css";

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <h2>Dashboard</h2>
            <div className="stats">
                <div>Total Invoices <b>5</b></div>
                <div className="paid">Paid <b>3</b></div>
                <div className="unpaid">Unpaid <b>2</b></div>
            </div>
            <button>New Invoice</button>
        </div>
    );
};

export default Dashboard;
