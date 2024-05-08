import { NavLink, useLocation } from "react-router-dom";
import Banner from "../../components/banner/Banner";
import WomanMainSection from "./womenSection/WomanMainSection";
import { useState } from "react";
import { motion } from "framer-motion";
import { useEffect } from "react";


const Underline = ({ active }) => {
    return (
        <motion.div
            className="absolute bottom-0 left-0 w-full h-0.5 bg-black mt-2 hover:bg-slate-800"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: active ? 1 : 0 }}
            transition={{ duration: 0.2 }}
        />
    );
};




const Home = () => {
    const [activeLink, setActiveLink] = useState(null);

    const handleClick = (index) => {
        setActiveLink(index);
    };



    return (
        <div>
        
            <Banner></Banner>
            <div>
                <ul className="flex  justify-center gap-4 mt-8 mb-12 ">
                    <li>
                        <NavLink
                            onClick={() => handleClick(0)}
                            className="cursor-pointer text-xl font-bold relative "
                           
                        >
                            WOMEN
                            {activeLink === 0 && <Underline active />}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            onClick={() => handleClick(1)}
                            className="cursor-pointer text-xl font-bold relative"
                         
                        >
                            MAN
                            {activeLink === 1 && <Underline active />}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            onClick={() => handleClick(2)}
                            className="cursor-pointer text-xl font-bold relative"
                           
                        >
                            KIDS
                            {activeLink === 2 && <Underline active />}
                        </NavLink>
                    </li>
                </ul>
            </div>
            <WomanMainSection></WomanMainSection>
        </div >
    );
};

export default Home;