import { NavLink } from "react-router-dom";
import Banner from "../../components/banner/Banner";
import WomanMainSection from "./womenSection/WomanMainSection";
import ExplorePalestine from "./womenSection/explorePalestine/ExplorePalestine";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div>
                <ul className="flex justify-center gap-4 mt-12 mb-16">
                    <li><NavLink className='btn'>Women</NavLink></li>
                    <li><NavLink className='btn'>MAN</NavLink></li>
                    <li><NavLink className='btn'>KIDS</NavLink></li>
                    
                </ul>
            </div>
            <WomanMainSection></WomanMainSection>
        </div>
    );
};

export default Home;