import { CiHeart } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CiUser } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { useEffect, useState } from "react";
import { useAuthContext } from "../../Context/AuthContext";
import { FaCaretDown, FaWhatsapp } from "react-icons/fa";
import countries from "../../Data/Data"
import { IoIosArrowBack, IoIosArrowDown, IoIosArrowForward, IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import Men from "./Men";
import { IoLogoFacebook } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import Women from "./Women";
import Kids from "./Kids";
const Navbar = () => {
    const { slideCard, setSlideCard, setShowSearch } = useAuthContext();
    const [men, setMen] = useState(false)
    const [hamburger, setHamburger] = useState(false)
    const [subHamburger, setSubHamburger] = useState(false)
    const [subHamburgerNumber, setSubHamburgerNumber] = useState(-1)
    const [subHamburgerSubCat, setSubHamburgerSubCat] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [language, setLanguage] = useState("English")
    const [selectedCountries, setSelectedCountries] = useState({});
    const [lLanguage, setLLanguage] = useState('');
    const [lcountries, setlCountries] = useState({});
    const [modalChange, setModalChange] = useState(false);
    const [women , setWomen] = useState(false);
    const [kids , setKids] = useState(false);

    useEffect(() => {
        // Retrieve language and countries from local storage
        const storedLanguage = localStorage.getItem('selectedLanguage');
        const storedCountries = JSON.parse(localStorage.getItem('selectedCountries'));

        // Set the retrieved data to state
        if (storedLanguage) {
            setLLanguage(storedLanguage);
        }
        if (storedCountries) {
            setlCountries(storedCountries.selectedCountry);
        }
    }, [modalChange]);
    console.log(lLanguage, lcountries);
    const handleCountryChange = (event) => {
        const selectedCountry = JSON.parse(event.target.value);
        setSelectedCountries({ selectedCountry });
    };
    const handleLanguageChange = (selectedLanguage) => {
        setLanguage(selectedLanguage);
    };


    const handleContinue = () => {
        // Save language and selected countries to local storage
        localStorage.setItem('selectedLanguage', language);
        localStorage.setItem('selectedCountries', JSON.stringify(selectedCountries));
        setModalChange(!modalChange);
    };

    const handleHamburger = () => {
        setHamburger(!hamburger)
        setSubHamburger(false)
        setSubHamburgerSubCat(false)
        console.log("Hamburger");
    }
    const handleSubHamburger = (index) => {
        setSubHamburgerNumber(index)
        setSubHamburger(subHamburger => !subHamburger)
        setSubHamburgerSubCat(false)

    }
    const handleSubHamburgerSubCat = () => {
        setSubHamburgerSubCat(!subHamburgerSubCat)
    }



    const handleSlideCard = () => {
        setSlideCard(!slideCard)
        if (!slideCard) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }


    const handleNavbarScroll = () => {
        if (window.scrollY > 20) {
            setScrolled(true)
        } else {
            setScrolled(false)
        }
    }

    window.addEventListener('scroll', handleNavbarScroll)


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
            <div className=" flex items-center bg-gray-900 px-10 h-[35px]">
                <div className="hidden lg:flex navbar-start text-white gap-2 ">
                    <IoLogoFacebook />
                    <FaInstagram />
                    <FaWhatsapp />
                </div>
                <div className="navbar-center mx-auto">
                    {texts.map((text, index) => (
                        <div key={index} className={`text-md text-white font-bold animate-slide ${index === currentTextIndex ? 'block' : 'hidden'}`}>
                            {text}
                        </div>
                    ))}
                </div>

                {/*  */}
                <div className="navbar-end hidden lg:flex gap-3 cursor-pointer" onClick={() => document.getElementById('my_modal_3').showModal()}>
                    <div className="text-white flex gap-2 items-center justify-center">
                        <img className="w-5 h-5 rounded-full" src={lcountries.flag} alt="" />
                        <p className="text-xs">{lcountries.name}</p>
                        <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                    </div>
                    <div className="text-white flex gap-2 items-center justify-center">
                        <p className="text-xs">{lLanguage}</p>
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
                        <div className="flex gap-2 mt-3">
                            <h1 className="bg-black w-5 h-5 rounded-full text-white text-center">
                                1
                            </h1>
                            <h1>Select your language </h1>
                        </div>
                        <div className="flex gap-3">
                            <h1
                                className={`rounded-md h-12 w-full border text-center flex items-center border-[#343a40] justify-center ${language === "English" ? 'border-2' : ''}`}
                                onClick={() => handleLanguageChange("English")}
                            >
                                English
                            </h1>
                            <h1
                                className={`rounded-md h-12 w-full border text-center flex items-center border-[#343a40] justify-center ${language === "يشحن إلى" ? 'border-2' : ''}`}
                                onClick={() => handleLanguageChange("يشحن إلى")}
                            >
                                يشحن إلى
                            </h1>
                        </div>
                        <div className="flex gap-2 items-center mt-3">
                            <h1 className="bg-black w-5 h-5 rounded-full text-white text-center">
                                2
                            </h1>
                            <h1>Shipping to </h1>
                        </div>
                        <select className="select w-full border border-black mt-3" onChange={handleCountryChange}>
                            <option disabled defaultValue="">Pick your favorite Simpson</option>
                            {countries.map((character) => (
                                <option key={character.name} value={JSON.stringify(character)}>
                                    {character.name} <img src={character.flag} alt="" style={{ width: '20px', marginLeft: '5px' }} />
                                </option>
                            ))}
                        </select>
                        <button className="btn w-full mt-3 bg-slate-700 hover:bg-slate-700 text-white" onClick={handleContinue}> CONTINUE</button>
                    </div>
                </div>
            </dialog>
            <div className={`navbar w-full md:w-full `}>
                <div className="navbar-start">
                    <div className="dropdown flex md:hidden">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden  ">
                            <p onClick={handleHamburger} className={`text-2xl`}><GiHamburgerMenu /></p>
                        </div>

                        {/*  */}
                        <div>
                            <div className={`bg-base-100 fixed top-0 left-0 w-80 h-screen transition-right duration-500 ${hamburger ? '' : 'left-[-350px]'}`}>
                                <p onClick={handleHamburger} className="cursor-pointer relative left-[80%] top-3 text-2xl"><IoMdClose /></p>
                                <div className="my-6">
                                    <hr />
                                </div>
                                <ul className={`px-4 text-[#3d3d3d] space-y-4 text-[18px]`}>
                                    <li onClick={() => handleSubHamburger(1)} className="flex items-center justify-between font-semibold">Women <span><IoIosArrowForward /></span></li>
                                    <li onClick={() => handleSubHamburger(2)} className="flex items-center justify-between font-semibold">Men <span><IoIosArrowForward /></span></li>
                                    <li onClick={() => handleSubHamburger(3)} className="flex items-center justify-between font-semibold">Kids <span><IoIosArrowForward /></span></li>
                                    <li className="flex items-center justify-between font-semibold">About Us <span><IoIosArrowForward /></span></li>
                                    <li className="flex items-center justify-between font-semibold">Store</li>
                                </ul>

                                <div className="justify-between mt-5 mx-4 lg:hidden flex gap-3 cursor-pointer" onClick={() => document.getElementById('my_modal_3').showModal()}>
                                    <div className="text-black flex gap-1 items-center justify-center">
                                        <img className="w-7 h-7 rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Flag_of_Bangladesh.svg" alt="" />
                                        <p>Bangladesh</p>
                                        <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                                    </div>
                                    <div className="text-black flex gap-1 items-center justify-center">
                                        <p>English</p>
                                        <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                                    </div>
                                </div>

                                {/*  */}
                                <div className="mt-16 mb-6"><hr /></div>
                                <div className=" text-black gap-4 flex  ml-4 ">
                                    <a><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
                                    </a>
                                    <a><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                                    <a><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                                </div>
                            </div>
                            {/* Women */}
                            <div className={`bg-base-100 fixed top-0 left-0 w-80 h-screen transition-left duration-500 ${hamburger ? '' : 'right-[-350px]'} ${subHamburger && subHamburgerNumber == 1 ? '' : 'left-[-350px]'}`}>
                                <div className="flex items-center justify-between pt-3 px-3">
                                    <p onClick={handleSubHamburger} className="cursor-pointer text-2xl"><IoIosArrowBack /></p>
                                    <p className="cursor-pointer text-xl">Women</p>
                                    <p onClick={handleHamburger} className="cursor-pointer text-2xl"><IoMdClose /></p>
                                </div>

                                <div className="my-6">
                                    <hr />
                                </div>
                                <ul className={`px-4 text-[#3d3d3d] space-y-4 text-[18px]`}>
                                    <li className="flex items-center justify-between font-semibold">All Shop</li>
                                    <li className="flex items-center justify-between font-semibold">New Arrival</li>
                                    <li onClick={handleSubHamburgerSubCat} className="flex items-center justify-between font-semibold">Shop by Category <span><IoIosArrowDown /></span></li>
                                    <ul className={`ml-3 space-y-5 text-[18px] transition-opacity transition-height ease-in-out duration-300 ${subHamburgerSubCat ? 'grid' : 'hidden'}`}>
                                        <li className="flex items-center justify-between">Tops</li>
                                        <li className="flex items-center justify-between">Bottoms</li>
                                        <li className="flex items-center justify-between">Dresses & Jumpsuits</li>
                                        <li className="flex items-center justify-between">Jackets</li>
                                    </ul>
                                    <li className="flex items-center justify-between font-semibold">Shop by Store <span><IoIosArrowDown /></span></li>
                                    <li className="flex items-center justify-between font-semibold text-red-500">Archive Sale</li>
                                </ul>
                            </div>

                            {/* men */}
                            <div className={`bg-base-100 fixed top-0 left-0 w-80 h-screen transition-left duration-500 ${hamburger ? '' : 'right-[-350px] hidden'} ${subHamburger && subHamburgerNumber == 2 ? '' : 'left-[-350px]'}`}>
                                <div className="flex items-center justify-between pt-3 px-3">
                                    <p onClick={handleSubHamburger} className="cursor-pointer text-2xl"><IoIosArrowBack /></p>
                                    <p className="cursor-pointer text-xl">Men</p>
                                    <p onClick={handleHamburger} className="cursor-pointer text-2xl"><IoMdClose /></p>
                                </div>
                                <div className="my-6">
                                    <hr />
                                </div>
                                <ul className={`px-4 text-[#3d3d3d] space-y-4 text-[18px]`}>
                                    <li className="flex items-center justify-between font-semibold">All Shop</li>
                                    <li className="flex items-center justify-between font-semibold">New Arrival</li>
                                    <li onClick={handleSubHamburgerSubCat} className="flex items-center justify-between font-semibold">Shop by Category <span><IoIosArrowDown /></span></li>
                                    <ul className={`ml-3 space-y-5 text-[18px] transition-opacity transition-height ease-in-out duration-300 ${subHamburgerSubCat ? 'grid' : 'hidden'}`}>
                                        <li className="flex items-center justify-between">Tops</li>
                                        <li className="flex items-center justify-between">Bottoms</li>
                                        <li className="flex items-center justify-between">Dresses & Jumpsuits</li>
                                        <li className="flex items-center justify-between">Jackets</li>
                                    </ul>
                                    <li className="flex items-center justify-between font-semibold">Shop by Store <span><IoIosArrowDown /></span></li>
                                    <li className="flex items-center justify-between font-semibold text-red-500">Archive Sale</li>
                                </ul>
                            </div>

                            {/* Kids */}
                            <div className={`bg-base-100 fixed top-0 left-0 w-80 h-screen transition-left duration-500 ${hamburger ? '' : 'right-[-350px] hidden'} ${subHamburger && subHamburgerNumber == 3 ? '' : 'left-[-350px]'}`}>
                                <div className="flex items-center justify-between pt-3 px-3">
                                    <p onClick={handleSubHamburger} className="cursor-pointer text-2xl"><IoIosArrowBack /></p>
                                    <p className="cursor-pointer text-xl">Kids</p>
                                    <p onClick={handleHamburger} className="cursor-pointer text-2xl"><IoMdClose /></p>
                                </div>
                                <div className="my-6">
                                    <hr />
                                </div>
                                <ul className={`px-4 text-[#3d3d3d] space-y-4 text-[18px]`}>
                                    <li className="flex items-center justify-between font-semibold">All Shop</li>
                                    <li className="flex items-center justify-between font-semibold">New Arrival</li>
                                    <li onClick={handleSubHamburgerSubCat} className="flex items-center justify-between font-semibold">Shop by Category <span><IoIosArrowDown /></span></li>
                                    <ul className={`ml-3 space-y-5 text-[18px] transition-opacity transition-height ease-in-out duration-300 ${subHamburgerSubCat ? 'grid' : 'hidden'}`}>
                                        <li className="flex items-center justify-between">Tops</li>
                                        <li className="flex items-center justify-between">Bottoms</li>
                                        <li className="flex items-center justify-between">Dresses & Jumpsuits</li>
                                        <li className="flex items-center justify-between">Jackets</li>
                                    </ul>
                                    <li className="flex items-center justify-between font-semibold">Shop by Store <span><IoIosArrowDown /></span></li>
                                    <li className="flex items-center justify-between font-semibold text-red-500">Archive Sale</li>
                                </ul>
                            </div>
                        </div>


                    </div>
                    <div className={`flex  flex-col text-center md:hidden `}>
                        <a className={` ${scrolled ? '' : 'text-white'} font-bold text-[10px]`}>THE GIVING MOMENTS</a>
                        <p className="text-[10px] font-extralight -pt-">MADE IN UAE</p>
                    </div>
                    <div className={`flex flex-col text-3xl text-center ${!scrolled && 'text-white'}`}>
                        <a className="md:grid lg:ml-20  md:ml-20 cursor-pointer" onClick={() => setShowSearch(true)}><CiSearch /></a>
                    </div>


                </div>
                <div className="navbar-center hidden lg:flex">
                    <div className={`${scrolled ? '' : 'text-white'} flex flex-col text-center`}>
                        {/* <a className={`btn font-extrabold btn-ghost text-2xl scale-y-125 tracking-[-0.09em] hover:bg-transparent`}>THE GIVING MOMENTS</a>
                        <p className="text-[12px] font-extralight scale-y-110">MADE IN UAE</p> */}
                        <img className="w-[200px]" src="https://i.ibb.co/C6xL0N5/new-logo-black.png" alt="" />
                    </div>

                </div>
                <div className={`${scrolled ? '' : 'text-white'} navbar-end px-6 md:gap-6 gap-1 md:text-3xl `}>
                    <Link to='/wishlist'><a ><CiHeart /></a></Link>
                    <Link to='/login'><a ><CiUser /></a></Link>

                    <a className="cursor-pointer" onClick={handleSlideCard}><HiOutlineShoppingBag /></a>
                </div>
            </div>

            {/* Nav Bar bugs is appearing from here from the functions */}
            <div onMouseLeave={() => { setMen(false),setWomen(false) }} className={`navbar  hidden mt-2 lg:flex justify-center ${scrolled && 'border-t border-slate-300'} `}>
                <div className="lg:grid hidden">
                    <ul className={`menu flex menu-horizontal px-6 ${!scrolled && 'text-white'}`}>
                        <li><a onMouseOver={() => { setScrolled(true), setMen(true),setWomen(false),setKids(false) }} className="text-[16px] hover:bg-transparent hover:underline" href="">Man</a></li>
                        <li ><a onMouseOver={() => { setScrolled(true), setWomen(true),setMen(false),setKids(false) }} className="text-[16px] hover:bg-transparent hover:underline  duration-300" href="">Woman</a></li>
                        <li><a className="text-[16px] hover:bg-transparent hover:underline" href="" onMouseOver={() => { setScrolled(true), setWomen(false),setMen(false),setKids(true) }}>Kids</a></li>
                        <li><a className="text-[16px] hover:bg-transparent hover:underline" href="">About Us</a></li>
                        <li><a className="text-[16px] hover:bg-transparent hover:underline" href="">Stores</a></li>
                    </ul>
                </div>
            </div>

            <div className={`${!men && 'hidden'}`} onMouseOver={() => { setScrolled(true), setMen(true) }} onMouseLeave={() => { setScrolled(false), setMen(false) }}>
                <Men />
            </div>
            <div className={`${!women && 'hidden'}`} onMouseOver={() => { setScrolled(true), setWomen(true) }} onMouseLeave={() => { setScrolled(false), setWomen(false) }}>
                <Women/>
            </div>
            <div className={`${!kids && 'hidden'}`} onMouseOver={() => { setScrolled(true), setKids(true) }} onMouseLeave={() => { setScrolled(false), setKids(false) }}>
                <Kids/>
            </div>
        </div>
    );
};

export default Navbar;