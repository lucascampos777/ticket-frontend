import React, { useEffect, useState } from "react";
import TicketForm from "../components/TicketForm";
import TicketList from "../components/TicketList";
import api from '../api/ticketApi';

export default function TicketPage() {
    const [members, setMembers] = useState([]);
    const [tickets, setTickets] = useState([]);

    const getMembers = async () => {
        try {
            const data = await api.getMembers();
            setMembers(data);
        } catch (e) {
            console.error(e)
        }
    }
    const getTickets = async () => {
        try {
            const data = await api.getTickets();
            setTickets(data);
        } catch (e) {
            console.error(e)
        }
    }
    const addTicket = async (data) => {
        try {
            await api.createTicket(data);
            getTickets();
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        getMembers();
        getTickets();
    }, [])

    return (
        <div className="container mt-5">
            <h1 className="mb-4">Manage Tickets</h1>
            <TicketForm members={members} onSubmit={addTicket} />
            <TicketList tickets={tickets} />
        </div>
    );
}