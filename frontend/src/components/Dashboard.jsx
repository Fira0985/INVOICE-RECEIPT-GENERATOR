import React, { useState } from "react";
import { FaCog, FaFileInvoice, FaHome, FaMoneyCheckAlt, FaReceipt } from "react-icons/fa";
import "../styles/Dashboard.css";
import Invoice from "./InvoiceList";

const Sidebar = (props) => {

    function changeActive(currentActive) {
        props.active(currentActive)
        console.log(currentActive)
    }

    return (
        <div className="sidebar">
            <h2 className="sidebar-title">INVOICE & RECEIPT GENERATOR</h2>
            <nav className="nav-links">
                <div className="nav-item active">
                    <FaHome />
                    <span onClick={() => changeActive("dashboard")}>Dashboard</span>
                </div>
                <div className="nav-item">
                    <FaFileInvoice />
                    <span onClick={() => changeActive("invoice")}>Invoices</span>
                </div>

                <div className="nav-item">
                    <FaReceipt />
                    <span onClick={() => changeActive("reciept")}>Reciept</span>
                </div>
                <div className="nav-item">
                    <FaMoneyCheckAlt />
                    <span onClick={() => changeActive("payments")}>Payments</span>
                </div>
                <div className="nav-item">
                    <FaCog />
                    <span onClick={() => changeActive("settings")}>Settings</span>
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
    const [active, setActive] = useState("dashboard")

    function getActive(active) {
        setActive(active)
    }

    switch (active) {
        case "dashboard":
            return (
                <div className="dashboard-container">
                    <Sidebar active={getActive} />
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
            )

            case "invoice":
            return (
                <Invoice />
            )

            case "receipt":
            return (
                <div className="dashboard-container">
                    <Sidebar active={getActive} />
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
            )

            case "payments":
            return (
                <div className="dashboard-container">
                    <Sidebar active={getActive} />
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
            )

            case "settings":
            return (
                <div className="dashboard-container">
                    <Sidebar active={getActive} />
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
            )
    }
};

export default Dashboard;
