import React, { useEffect } from "react";
import TicketItem from "./TicketItem";

export default function TicketList({ tickets }) {

    if (!tickets || tickets.length === 0) {
        return <p className="text-center text-muted">No tickets available.</p>;
    }

    return (
        <div className="mt-4">
            <h2 className="h5 mb-3">Ticket List</h2>
            <div className="list-group">
                {tickets.map((ticket, index) => (
                    <TicketItem key={index} ticket={ticket} />
                ))}
            </div>
        </div>
    );
}
