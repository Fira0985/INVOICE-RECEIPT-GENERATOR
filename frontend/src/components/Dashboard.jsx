import React from "react";
import { FaCog, FaFileInvoice, FaHome, FaMoneyCheckAlt } from "react-icons/fa";
import "../styles/Dashboard.css";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h2 className="sidebar-title">INVOICE & RECEIPT GENERATOR</h2>
            <nav className="nav-links">
                <div className="nav-item active">
                    <FaHome />
                    <span>Dashboard</span>
                </div>
                <div className="nav-item">
                    <FaFileInvoice />
                    <span>Invoices</span>
                </div>
                <div className="nav-item">
                    <FaMoneyCheckAlt />
                    <span>Payments</span>
                </div>
                <div className="nav-item">
                    <FaCog />
                    <span>Settings</span>
                </div>
            </nav>
        </div>
    );
};

const DashboardCard = ({ title, count, colorClass }) => (
    <div className="dashboard-card">
        <p className="card-title">{title}</p>
        <p className={`card-count ${colorClass}`}>{count}</p>
    </div>
);

const Dashboard = (props) => {
    return (
        <div className="dashboard-container">
            <Sidebar />
            <main className="dashboard-main">
                <div className="dashboard-header">
                    <h1>Dashboard</h1>
                    <span className="user-info">{props.name} |English</span>
                </div>

                <div className="dashboard-cards">
                    <DashboardCard title="Total Invoices" count={5} colorClass="text-default" />
                    <DashboardCard title="Paid" count={3} colorClass="text-green" />
                    <DashboardCard title="Unpaid" count={2} colorClass="text-orange" />
                </div>

                <button className="new-invoice-btn">New Invoice</button>
            </main>
        </div>
    );
};

export default Dashboard;
