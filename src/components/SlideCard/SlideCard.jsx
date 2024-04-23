import { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { HiOutlineMinus } from "react-icons/hi";
import img from '../../assets/images/S106V12PBWM_1.jpg'
import { IoMdClose } from "react-icons/io";


const SlideCard = () => {
    const [close, setClose] = useState(false)
    const [number, setNumber] = useState(1);


    const handleClose = () => {
        setClose(!close)
    }

    const decreaseNumber = () => {
        if (number > 1) {
            setNumber(prevNumber => prevNumber - 1);
        }
    };

    const increaseNumber = () => {
        setNumber(prevNumber => prevNumber + 1);
    };

    return (
        <div className={`w-1/3 transition-right duration-500 bg-base-100 h-screen  absolute z-[99999999999999999] p-6 ${close ? 'right-[-600px] ' : 'right-[-00px]'}`}>
            <h1 className="font-bold text-3xl mb-6">Shopping bag(1)</h1>
            <div className="grid grid-cols-4 gap-6 relative">
                <div>
                    <img src={img} alt="" />
                </div>
                <div className="col-span-2">
                    <h1>Oversized Palestine Hoodie</h1>
                    <p>Colour: Pithch Black</p>
                    <p>Size (UK): M</p>
                    <p>8 in stock</p>
                    <div className="flex border w-16">
                        <button className="" onClick={decreaseNumber}><HiOutlineMinus /></button>
                        <input type="text" value={number} className=" text-center w-[100%]" />
                        <button className="" onClick={increaseNumber}><BsPlusLg /></button>
                    </div>
                </div>
                <div>
                    <h1>649 AED</h1>
                </div>
                <p onClick={handleClose} className="absolute top-[-50px] right-0 text-2xl"><IoMdClose /></p>
            </div>
        </div>
    );
};

export default SlideCard;