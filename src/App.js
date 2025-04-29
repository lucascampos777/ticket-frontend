import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TicketForm from './components/TicketForm';
import { useEffect, useState } from 'react';
import api from './api/ticketApi';
import TicketList from './components/TicketList';

function App() {

  const [members, setMembers] = useState([]);
  const [tickets, setTickets] = useState([]);

  const getMembers = () => {
    api.getMembers().then(data => {
      setMembers(data)
    })
  }
  const getTickets = () => {
    api.getTickets().then(data => {
      setTickets(data)
    })
  }
  const addTicket = async (data) => {
    try {
      await api.createTicket(data);
      getTickets();
    } catch(e) {
      console.error(e)
    }
  }

  useEffect(() => {
    getMembers();
    getTickets();
  }, [])

  return (
    <div className="container mt-5">
      <TicketForm members={members} onSubmit={addTicket}/>
      <TicketList tickets={tickets} />
    </div>
  );
}

export default App;
