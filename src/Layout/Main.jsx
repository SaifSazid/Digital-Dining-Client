import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Chatbot from "../pages/Shared/Chatbot/Chatbot";

const Main = () => {
    const location = useLocation();
   
    const noHeaderFooter = location.pathname.includes('login') ||
    location.pathname.includes('signup');
    return (
        <div>
           { noHeaderFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
           { noHeaderFooter || <Footer></Footer>}
           <Chatbot></Chatbot>
        </div>
    );
};

export default Main;