import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Shipping = () => {
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
            </div>

            <div className='mt-16'>
                <h1>Shipping Method</h1>
                <div className='grid md:grid-cols-12 gap-2 border p-4 mt-4 items-center'>
                    <div className='col-span-10 flex gap-2'>
                        <span><input checked className='accent-[#5b9bbe]' type="radio" name="" id="" /></span>
                        <p className=' text-[14px]'>	DHL Worldwide Express Delivery (5-7 working days)</p>
                    </div>
                    <p className='font-bold col-span-2'>AED649.00</p>
                </div>
            </div>
            <div className="col-span-2 md:mb-56 mt-6 flex md:justify-between md:items-center gap-5 md:mt-12">
                <a className=" flex text-[14px] items-center text-[#5b9bbe]" href=""><span className="text-[18px]"> <IoIosArrowBack /></span> Return to bag</a>
                <Link to='/payment/payment-method'> <button className="btn text-white bg-slate-900">Continue to shipping</button></Link>
            </div>
        </div>
    );
};

export default Shipping;