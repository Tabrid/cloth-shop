import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

const Main = () => {



    return (
        <div>
            <div className="md:w-full fixed z-[99]">
                <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;