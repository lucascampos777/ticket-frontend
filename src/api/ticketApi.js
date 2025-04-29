import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL+'/api/ticket';

// Create a ticket
const createTicket = async (ticketData) => {
    try {
        const response = await axios.post(`${API_URL}/tickets`, ticketData);
        return response.data;
    } catch (error) {
        console.error('Error creating ticket:', error);
        throw error;
    }
};

// Get tickets
const getTickets = async () => {
    try {
        const response = await axios.get(`${API_URL}/tickets`);
        return response.data;
    } catch (error) {
        console.error('Error fetching tickets:', error);
        throw error;
    }
};

// Get Members
const getMembers = async () => {
    try {
        const response = await axios.get(`${API_URL}/members`);
        return response.data;
    } catch (error) {
        console.error('Error fetching tickets:', error);
        throw error;
    }
};

export default {getTickets, getMembers, createTicket};