import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer/Footer";
import SearchBar from "../components/SearchBar/SearchBar";
import NavigationBar from "../components/navbar/NavigationBar";
import SlideCard from "../components/SlideCard/SlideCard";
import Chat from "../components/Chat/Chat";


const Main = () => {

    const location = useLocation()
 


    return (
        <div>
            <div className={`md:w-ful w-full z-[999] ${location.pathname == '/' ? 'fixed' : 'sticky top-0'}`}>
                <div className={`${location.pathname == '/' ? '' : 'hidden'}`}>
                    <Navbar></Navbar>
                </div>
                <div className={`${location.pathname == '/' ? 'hidden' : ''}`}>
                    <NavigationBar></NavigationBar>
                </div>
            </div>
            <SearchBar></SearchBar>
            {/* Slider card */}
            <div className="relative">
                <SlideCard />
            </div>
            <Outlet></Outlet>
            <Chat/>
            <Footer></Footer>
        </div>
    );
};

export default Main;