import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer/Footer";
import SearchBar from "../components/SearchBar/SearchBar";


const Main = () => {

    return (
        <div>
            <div className="md:w-full w-full fixed z-[99]">
                <Navbar></Navbar>
            </div>
            <SearchBar></SearchBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;