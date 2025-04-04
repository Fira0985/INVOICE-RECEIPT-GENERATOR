import React from "react";
import "../styles/CreateInvoice.css";

const CreateInvoice = () => {
    return (
        <div className="invoice-container">
            <h2>Create Invoice</h2>
            <input type="text" placeholder="Customer Name" />
            <input type="date" />
            <input type="number" placeholder="Item" />
            <input type="number" placeholder="Unit Price" />
            <button className="create">Create</button>
            <button className="cancel">Cancel</button>
        </div>
    );
};

export default CreateInvoice;
