
import { CiSearch } from 'react-icons/ci';
import './SearchBar.css'; // Import CSS module for styling
import { RxCross1 } from "react-icons/rx";
import { useAuthContext } from '../../Context/AuthContext';

const SearchBar = () => {
    const { showSearch , setShowSearch} = useAuthContext();

    return (
        <div className={`flex justify-center items-center w-full h-96 bg-white  overflow-hidden  mb-4 fixed top-0 z-[2000] ${!showSearch && 'hidden'}`}>

            <div className='w-full flex text-2xl mx-24 justify-evenly'>
                <div className='flex text-2xl w-2/3 items-center'>
                    <input type="text" placeholder="Type here" className="input rounded-none input-bordered w-full " />
                    <CiSearch className='w-14 ml-[-50px] cursor-pointer' />
                </div>
                <div className='w-1/3 text-2xl flex justify-center items-center'>
                    <RxCross1 className='cursor-pointer' onClick={() => setShowSearch(false)}/>

                </div>
            </div>

        </div>
    );
};

export default SearchBar;
