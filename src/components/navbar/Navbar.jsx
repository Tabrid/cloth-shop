import { CiHeart } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CiUser } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-transparent">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                    <div className="md:grid hidden">
                        <ul className="menu menu-horizontal px-6 text-white">
                            <li><a className="text-[16px]" href="">Woman</a></li>
                            <li><a className="text-[16px]" href="">Man</a></li>
                            <li><a className="text-[16px]" href="">Kids</a></li>
                            <li><a className="text-[16px]" href="">About Us</a></li>
                            <li><a className="text-[16px]" href="">Stores</a></li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <div className="flex flex-col text-center">
                        <a className="btn btn-ghost text-2xl text-white">THE GIVING MOMENTS</a>
                        <p className="text-white text-[14px] font-extralight">MADE IN UAE</p>
                    </div>

                </div>
                <div className="navbar-end px-6 md:gap-6">
                    <a className="text-white text-3xl"><CiHeart /></a>
                    <a className="text-white text-3xl"><CiUser /></a>
                    <a className="text-white text-3xl"><CiSearch /></a>
                    <a className="text-white text-3xl"><HiOutlineShoppingBag /></a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;