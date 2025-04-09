import React, { useState } from "react";
import { FaCog, FaFileInvoice, FaHome, FaMoneyCheckAlt, FaReceipt } from "react-icons/fa";
import "../styles/Dashboard.css";
import Invoice from "./InvoiceList";
import Payment from "./Payment";
import Reciept from "./Reciept";
import Setting from "./Setting";

const Sidebar = (props) => {
    const [active, setActive] = useState("dashboard")

    function changeActive(currentActive) {
        props.active(currentActive)
        setActive(currentActive)
    }

    return (
        <div className="sidebar">
            <h2 className="sidebar-title">INVOICE & RECEIPT GENERATOR</h2>
            <nav className="nav-links">
                <div className={active == "dashboard"? "nav-item active": "nav-item"}>
                    <FaHome />
                    <span onClick={() => changeActive("dashboard")}>Dashboard</span>
                </div>
                <div className={active == "invoice"? "nav-item active": "nav-item"}>
                    <FaFileInvoice />
                    <span onClick={() => changeActive("invoice")}>Invoices</span>
                </div>

                <div className={active == "reciept"? "nav-item active": "nav-item"}>
                    <FaReceipt />
                    <span onClick={() => changeActive("reciept")}>Reciept</span>
                </div>
                <div className={active == "payments"? "nav-item active": "nav-item"}>
                    <FaMoneyCheckAlt />
                    <span onClick={() => changeActive("payments")}>Payments</span>
                </div>
                <div className={active == "settings"? "nav-item active": "nav-item"}>
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
                            <span className="user-info">{props.name} | English</span>
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
                <div className="dashboard-container">
                    <Sidebar active={getActive} />
                    <Invoice name={props.name} />
                </div>

            )

        case "reciept":
            return (
                <div className="dashboard-container">
                    <Sidebar active={getActive} />
                    <Reciept name={props.name} />
                </div>
            )

        case "payments":
            return (
                <div className="dashboard-container">
                    <Sidebar active={getActive} />
                    <Payment name={props.name} />
                </div>
            )

        case "settings":
            return (
                <div className="dashboard-container">
                    <Sidebar active={getActive} />
                    <Setting name={props.name} />
                </div>
            )
    }
};

export default Dashboard;
export { Sidebar };

