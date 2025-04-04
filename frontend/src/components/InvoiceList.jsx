import React from "react";
import "../styles/InvoiceList.css";

const InvoiceList = () => {
    const invoices = [
        { id: "INV 1001", date: "03/25/2025", status: "Paid" },
        { id: "INV 1002", date: "03/25/2025", status: "Unpaid" },
        { id: "INV 1003", date: "03/25/2025", status: "Paid" }
    ];

    return (
        <div className="invoice-list-container">
            <h2>Invoices</h2>
            <ul>
                {invoices.map((invoice) => (
                    <li key={invoice.id} className={`status-${invoice.status.toLowerCase()}`}>
                        {invoice.id} - {invoice.date} - {invoice.status}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default InvoiceList;
