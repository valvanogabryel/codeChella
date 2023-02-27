import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './pages/Home';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;