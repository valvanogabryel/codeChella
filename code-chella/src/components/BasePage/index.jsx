// React
import { Outlet } from "react-router-dom";
// Components
import Footer from "components/Footer";
import Header from "components/Header";

const BasePage = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}

export default BasePage;