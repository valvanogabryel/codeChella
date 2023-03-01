import Footer from 'components/Footer';
import Header from 'components/Header';
import Experience from 'pages/Experience';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './pages/Home';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/experience' element={<Experience />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default AppRoutes;