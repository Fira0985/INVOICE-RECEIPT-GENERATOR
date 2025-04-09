import React from "react";
import "../styles/InvoiceList.css";

const InvoiceList = (props) => {
    
    return (
        <div className="dashboard-container">
            <main className="dashboard-main">
                <div className="dashboard-header">
                    <h1>Invoices</h1>
                    <span className="user-info">{props.name} | English</span>
                </div>

                <div className="invoice-table">
                    <input type="text" className="search-input" placeholder="Search by customer..." />
                    <table>
                        <thead>
                            <tr>
                                <th>Invoice #</th>
                                <th>Customer</th>
                                <th>Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>INV-001</td>
                                <td>John Doe</td>
                                <td>2025-04-08</td>
                                <td><span className="status paid">Paid</span></td>
                            </tr>
                            <tr>
                                <td>INV-002</td>
                                <td>Jane Smith</td>
                                <td>2025-04-06</td>
                                <td><span className="status unpaid">Unpaid</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
};

export default InvoiceList;
