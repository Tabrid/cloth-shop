import { NavLink } from "react-router-dom";
import Banner from "../../components/banner/Banner";
import WomanMainSection from "./womenSection/WomanMainSection";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div>
                <ul className="flex justify-center gap-4 mt-12 mb-16">
                    <li><NavLink className='btn'>Women</NavLink></li>
                    <li><NavLink className='btn'>Man</NavLink></li>
                    <li><NavLink className='btn'>Kids</NavLink></li>
                </ul>
            </div>
            <WomanMainSection></WomanMainSection>
        </div>
    );
};

export default Home;