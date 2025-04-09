import React from "react";
import "../styles/PaymentsPage.css";

const PaymentsPage = (props) => {
    return (
        <div className="dashboard-container">
            <main className="dashboard-main">
                <div className="dashboard-header">
                    <h1>Payments</h1>
                    <span className="user-info">{props.name} | English</span>
                </div>

                <div className="payments-content">
                    <p>Here you can manage all your payment records.</p>
                </div>
            </main>
        </div>
    );
};

export default PaymentsPage;
