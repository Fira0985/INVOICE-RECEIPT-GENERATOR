import React from "react";
import "../styles/ReceiptPage.css";

const ReceiptPage = (props) => {
    return (
        <div className="dashboard-container">
            <main className="dashboard-main">
                <div className="dashboard-header">
                    <h1>Receipts</h1>
                    <span className="user-info">{props.name} | English</span>
                </div>

                <div className="receipt-content">
                    <p>No receipts found. Generate a new one from the invoice page.</p>
                </div>
            </main>
        </div>
    );
};

export default ReceiptPage;
