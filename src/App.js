import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TicketPage from './pages/TicketPage';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import DesignPage from './pages/DesignPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/ticket" />} />
        <Route path="/ticket" element={<TicketPage />} />
        <Route path="/design" element={<DesignPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
