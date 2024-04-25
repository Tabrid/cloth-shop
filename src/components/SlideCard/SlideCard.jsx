import { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { HiOutlineMinus } from "react-icons/hi";
import img1 from '../../assets/images/S106V12PBWM_1.jpg'
import { IoMdClose } from "react-icons/io";
import { useAuthContext } from "../../Context/AuthContext";


const SlideCard = () => {
    const { slideCard, setSlideCard } = useAuthContext();


    const handleSlideCard = () => {
        setSlideCard(!slideCard)
        if (!slideCard) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }
    const [number, setNumber] = useState(1);
    const decreaseNumber = () => {
        if (number > 1) {
            setNumber(prevNumber => prevNumber - 1);
        }
    };

    const increaseNumber = () => {
        setNumber(prevNumber => prevNumber + 1);
    };

    return (
        <div className={`w-[80%] md:w-[40%] bg-base-100 shadow-2xl h-fit z-[999] p-6 fixed top-0 ${slideCard ? 'right-0 transition-right duration-500 ' : 'hidden right-[-620px] transition-left duration-500'}`}>
            <h1 className="font-bold text-3xl mb-6">Shopping bag(1)</h1>
            <div className="grid md:grid-cols-4 gap-6 relative">
                <div>
                    <img src={img1} alt="" />
                </div>
                <div className="col-span-2">
                    <h1 className="text-xl font-semibold">Oversized Palestine Hoodie</h1>
                    <p>Colour: Pithch Black</p>
                    <p>Size (UK): M</p>
                    <p>8 in stock</p>
                    <div className="flex border w-20 my-5 py-2 px-2 rounded-md">
                        <button className="" onClick={decreaseNumber}><HiOutlineMinus /></button>
                        <input type="text" value={number} className=" text-center w-[100%]" />
                        <button className="" onClick={increaseNumber}><BsPlusLg /></button>
                    </div>
                </div>
                <div>
                    <h1>649 AED</h1>
                </div>


                <p onClick={handleSlideCard} className="absolute top-[-50px] right-0 text-2xl cursor-pointer"><IoMdClose /></p>
            </div>
            <div className="grid gap-4 mt-32">
                <div className="flex justify-between items-center">
                    <h1 className="font-bold text-xl">Subtotal:</h1>
                    <h1 className="font-bold text-xl">3,655 AED</h1>
                </div>
                <p>Tax include <span className="text-[#5b9bbe]"><a href="">Shipping</a></span> calculated at checkout.</p>
                <button className="btn bg-black text-white">CHECK OUT</button>
            </div>
        </div>
    );
};

export default SlideCard;