import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Main = () => {
    return (
        <div>
            <div className="md:w-full fixed z-[9999999999999]">
                <Navbar></Navbar>
            </div>
            
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;