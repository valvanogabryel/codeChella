// React
// React
// import { useEffect } from 'react';
import {
  Route, Routes,
  //  useLocation 
} from 'react-router-dom';
// Base
import BasePage from 'components/BasePage';
// pages
import Home from './pages/Home';
import Experience from 'pages/Experience';
import Sectors from 'pages/Sectors';
import Informations from 'pages/Informations/Informations';
import TicketPurchase from 'pages/TicketPurchase/TicketPurchase';
import Ticket from 'pages/Ticket/Ticket';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<BasePage />}>
        <Route index element={<Home />} />
        <Route path='experience' element={<Experience />} />
        <Route path='sectors' element={<Sectors />} />
        <Route path='info' element={<Informations />} />
        <Route path='ticket' element={<TicketPurchase />} />
        <Route path='user' element={<Ticket />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;