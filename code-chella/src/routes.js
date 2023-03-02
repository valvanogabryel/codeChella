import BasePage from 'components/BasePage';
import Experience from 'pages/Experience';
import Sectors from 'pages/Sectors';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './pages/Home';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<BasePage />}>
          <Route index element={<Home />} />
          <Route path='experience' element={<Experience />} />
          <Route path='sectors' element={<Sectors />} />
          <Route path='info' element={<div><h1>Informações</h1></div>} />
          <Route path='ticket' element={<div><h1>Ingresso</h1></div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;