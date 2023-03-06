// React
import { Route, BrowserRouter, Routes } from 'react-router-dom';
// Base
import BasePage from 'components/BasePage';
// pages
import Home from './pages/Home';
import Experience from 'pages/Experience';
import Sectors from 'pages/Sectors';
import Informations from 'pages/Informations/Informations';
import Ticket from 'pages/Ticket/Ticket';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<BasePage />}>
          <Route index element={<Home />} />
          <Route path='experience' element={<Experience />} />
          <Route path='sectors' element={<Sectors />} />
          <Route path='info' element={<Informations />} />
          <Route path='ticket' element={<Ticket />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;