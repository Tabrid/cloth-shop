
import { IoIosArrowBack } from 'react-icons/io';
import { FaLock, FaQuestionCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useState } from 'react';

const GatewayPage = () => {

    const [showForm, setShowForm] = useState(false)

    const handleRadioChange = (event) => {
        const targetValue = event.target.value;
        setShowForm(targetValue === 'different');
    }

    return (
        <div className='mt-12'>
            <div className='border p-2'>
                <div className='grid md:grid-cols-9'>
                    <p className='text-[#a4a4a4] col-span-2'>contact</p>
                    <p className='col-span-5'>fahimProdhan@gmail.com</p>
                    <a className='text-[#5b9bbe]' href="">change</a>
                </div>
                <div className='my-4'>
                    <hr />
                </div>
                <div className='grid  md:grid-cols-9'>
                    <p className='text-[#a4a4a4] col-span-2'>Shipping to </p>
                    <p className='col-span-5'>Dhaka,Bangladesh</p>
                    <a className='text-[#5b9bbe]' href="">change</a>
                </div>
                <div className='my-4'>
                    <hr />
                </div>
                <div className='grid  md:grid-cols-9'>
                    <p className='text-[#a4a4a4] col-span-2'>Shipping method</p>
                    <p className='col-span-7'>DHL Worldwide Express Delivery (5-7 working days) ·<span className='font-bold'>AED30.00</span></p>
                </div>
            </div>

            <div className='mt-16'>
                <h1 className='text-xl'>Payment</h1>
                <p className='text-[14px] text-[#838383]'>All transactions are secure and encrypted.</p>
                <div className='grid grid-cols-12 gap-2 border border-b-0 p-4 mt-4 items-center'>
                    <div className='col-span-10 flex gap-2'>
                        <span><input checked className='accent-[#5b9bbe]' type="radio" name="" id="" /></span>
                        <p className=' text-[14px]'>Credit card</p>
                    </div>
                    <div className='flex'>
                        <img className='w-8 ' src="https://i.ibb.co/HFzB6J8/visa-logo-freelogovectors-net-1-of-1.png" alt="" />
                        <img className='w-8 ' src="https://i.ibb.co/8bPST2H/mastercard-logo-freelogovectors-net-640x400.png" alt="" />
                    </div>
                </div>


                <form className='border p-3 bg-base-200 flex flex-wrap md:grid  md:grid-cols-2  gap-3'>

              
                        <label className="input w-full input-bordered flex items-center gap-2 col-span-2">
                            <input type="text" className="grow  focus:border-[#5b9bbe]" placeholder="Card Number" />
                            <p className='text-[#888888]'><FaLock /></p>
                        </label>

                        <label className="input w-full input-bordered flex items-center gap-2 col-span-2">
                            <input type="text" className="grow  focus:border-[#5b9bbe]" placeholder="Name On card" />
                        </label>
                        <label className="input w-full input-bordered flex items-center gap-2">
                            <input type="text" className="grow  focus:border-[#5b9bbe]" placeholder="Expiration date (MM/YY)" />
                        </label>
                        <label className="input w-full input-bordered flex items-center gap-2 ">
                            <input type="text" className="grow  focus:border-[#5b9bbe]" placeholder="Security code" />
                            <p className='text-[#888888]'><FaQuestionCircle /></p>
                        </label>
                </form>

            </div>
            <div className='mt-16'>
                <h1 className='text-xl'>Billing address</h1>
                <p className='text-[14px] text-[#838383]'>Select the address that matches your card or payment method.</p>
                <div className='grid md:grid-cols-12 gap-2 border p-4 mt-4 items-center'>
                    <form className='col-span-12 grid gap-4'>
                        <div className='flex gap-3'>
                            <input
                                type="radio"
                                name="radio-1"
                                className="radio checked:bg-[#5b9bbe]"
                                value="same"
                                checked={!showForm}
                                onChange={handleRadioChange}
                            />
                            <label>Same as shipping address</label>
                        </div>
                        <hr />
                        <div className='flex gap-3'>
                            <input
                                type="radio"
                                name="radio-1"
                                className="radio checked:bg-[#5b9bbe]"
                                value="different"
                                checked={showForm}
                                onChange={handleRadioChange}
                            />
                            <label>Use a different billing address</label>
                        </div>
                    </form>
                </div>

                <div className={`border p-3 bg-base-200 grid gap-3 ${showForm ? '' : 'hidden'}`}>
                    <form className="grid md:grid-cols-2 gap-3">
                        <select className="select select-bordered w-full col-span-2">
                            <option disabled selected>Country</option>
                            <option>Han Solo</option>
                            <option>Greedo</option>
                        </select>
                        <input placeholder="First name" className="w-full border py-3 rounded-md pl-3 focus:border-[#5b9bbe]" type="text" />
                        <input placeholder="Last name" className="w-full border py-3 rounded-md pl-3 focus:border-[#5b9bbe]" type="text" />
                        <input placeholder="Address" className="col-span-2 w-full border py-3 rounded-md pl-3 focus:border-[#5b9bbe]" type="text" />
                        <input placeholder="Apartment, suite, etc." className="col-span-2 w-full border py-3 rounded-md pl-3 focus:border-[#5b9bbe]" type="text" />
                        <input placeholder="City" className="w-full border py-3 rounded-md pl-3 focus:border-[#5b9bbe]" type="text" />
                        <input placeholder="Postal code" className="w-full border py-3 rounded-md pl-3 focus:border-[#5b9bbe]" type="text" />
                        <input placeholder="+880" className="col-span-2 w-full border py-3 rounded-md pl-3 focus:border-[#5b9bbe]" type="text" />
                    </form>
                </div>

            </div>
            <div className="col-span-2 md:mb-56 mt-6 flex md:justify-between md:items-center gap-5 md:mt-12">
                <a className=" flex text-[14px] items-center text-[#5b9bbe]" href=""><span className="text-[18px]"> <IoIosArrowBack /></span> Return to bag</a>
                <Link to='/payment/payment-method'> <button className="btn text-white bg-slate-900">Pay Now</button></Link>
            </div>
        </div>
    );
};

export default GatewayPage;