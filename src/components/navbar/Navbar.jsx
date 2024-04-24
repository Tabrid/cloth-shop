import { CiHeart } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CiUser } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { useEffect, useState } from "react";
import { useAuthContext } from "../../Context/AuthContext";
import { FaCaretDown } from "react-icons/fa";
import countries from "../../Data/Data"
const Navbar = () => {
    const { slideCard, setSlideCard } = useAuthContext();
    const [activeComponent, setActiveComponent] = useState(null);
    const [show, setShow] = useState(false)
    const handleMouseEnter = (component) => {
        setActiveComponent(component);
        setShow(true);
    };

    const handleMouseLeave = () => {
        setShow(false);
    };


    const handleSlideCard = () => {
        setSlideCard(!slideCard)
        if (!slideCard) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }
    const [scrolled, setScrolled] = useState(false)

    const handleScroll = () => {
        if (window.scrollY > 20) {
            setScrolled(true)
        } else {
            setScrolled(false)
        }
    }

    window.addEventListener('scroll', handleScroll)
    const texts = ["Hello", "Welcome", "Bonjour", "Hola"];
    const interval = 2000; // Change text every 2 seconds
    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, interval);

        return () => clearInterval(intervalId);
    }, [texts, interval]);
    return (
        <div className={`${scrolled ? 'bg-base-100' : 'bg-transparent'}`}>
            <div className="navbar bg-gray-900 px-6">
                <div className="flex navbar-start text-white gap-2 ">
                    <a><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
                    </a>
                    <a><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                    <a><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                </div>
                <div className="navbar-center">
                    {texts.map((text, index) => (
                        <div key={index} className={`text-md text-white font-bold animate-slide ${index === currentTextIndex ? 'block' : 'hidden'}`}>
                            {text}
                        </div>
                    ))}
                </div>
                <div className="navbar-end gap-3 cursor-pointer" onClick={() => document.getElementById('my_modal_3').showModal()}>
                    <div className="text-white flex gap-1 items-center justify-center">
                        <img className="w-7 h-7 rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Flag_of_Bangladesh.svg" alt="" />
                        <p>Bangladesh</p>
                        <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                    </div>
                    <div className="text-white flex gap-1 items-center justify-center">
                        <p>English</p>
                        <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />

                    </div>
                </div>
            </div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h2 className="text-xl font-bold text-center">SET YOUR PREFERENCES</h2>
                    <div>
                        <h1 className=" bg-black w-5 h-5 rounded-full text-white text-center">
                        1
                    </h1>
                    <h1>Select your language </h1>
                        <h1 className=" rounded-md h-12 w-full border text-center flex items-center  border-black justify-center">English</h1>
                        <h1 className=" bg-black w-5 h-5 rounded-full text-white text-center mt-3">
                        2
                    </h1>
                    <h1>Shipping to </h1>
                        <select className="select w-full border border-black">
                            <option disabled defaultValue="">Pick your favorite Simpson</option>
                            {countries.map((character) => (
                                <option key={character.id} value={character.name}>
                                    {character.name}
                                </option>
                            ))}
                        </select>
                        <button className="btn w-full mt-3 bg-slate-700 hover:bg-slate-700 text-white"> CONTINUE</button>
                    </div>
                </div>
            </dialog>
            <div className={`navbar w-full md:w-full `}>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden  ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <div className={`flex  flex-col text-center md:hidden ${!scrolled && 'text-white'}`}>
                        <a className={`font-bold text-[10px]`}>THE GIVING MOMENTS</a>
                        <p className="text-[10px] font-extralight -pt-">MADE IN UAE</p>
                    </div>
                    <div className={`flex flex-col text-3xl text-center ${!scrolled && 'text-white'}`}>
                        <a className="md:grid lg:ml-20  md:ml-20"><CiSearch /></a>
                    </div>


                </div>
                <div className="navbar-center hidden lg:flex">
                    <div className={`flex flex-col text-center ${!scrolled && 'text-white'}`}>
                        <a className={`btn font-extrabold btn-ghost text-2xl scale-y-125 tracking-[-0.09em] hover:bg-transparent`}>THE GIVING MOMENTS</a>
                        <p className="text-[12px] font-extralight scale-y-110">MADE IN UAE</p>
                    </div>

                </div>
                <div className={`navbar-end px-6 md:gap-6 gap-1 md:text-3xl ${!scrolled && 'text-white '}`}>
                    <a ><CiHeart /></a>
                    <a ><CiUser /></a>

                    <a className="cursor-pointer" onClick={handleSlideCard}><HiOutlineShoppingBag /></a>
                </div>
            </div>
            <div className={`navbar mt-2 flex justify-center ${scrolled && 'border-t border-slate-300'} `}>
                <div className="lg:grid hidden">
                    <ul className={`menu flex menu-horizontal px-6 ${!scrolled && 'text-white'}`}>
                        <li><a onMouseOver={() => setScrolled(true)} onMouseLeave={() => setScrolled(false)} className="text-[16px] hover:bg-transparent hover:underline" href="">Man</a></li>
                        <li onMouseEnter={() => handleMouseEnter('women')}
                            onMouseLeave={handleMouseLeave}><a className="text-[16px] hover:bg-transparent hover:underline  duration-300" href="">Woman</a></li>
                        <li><a className="text-[16px] hover:bg-transparent hover:underline" href="">Kids</a></li>
                        <li><a className="text-[16px] hover:bg-transparent hover:underline" href="">About Us</a></li>
                        <li><a className="text-[16px] hover:bg-transparent hover:underline" href="">Stores</a></li>
                    </ul>
                </div>
            </div>

            <div>

                {(activeComponent === 'men' || activeComponent === 'women') && show && (
                    <div className="fixed inset-0 flex items-center justify-center ">
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <h1 className="text-4xl text-gray-900">
                                {activeComponent === 'men' ? "Men's Collection" : "Women's Collection"}
                            </h1>
                            <button className="mt-4 bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800" onClick={handleMouseLeave}>
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;