import { IoIosArrowForward } from "react-icons/io";
import img from '../../assets/images/S106V12PBWM_1.jpg'
import { Outlet } from "react-router-dom";

const Payment = () => {
    return (
        <div >
            <div className='grid md:grid-cols-12 flex-col-reverse '>
                <div className='md:col-span-7 md:pl-40 md:pr-20 pt-10 pl-6 pr-6 order-last md:order-first'>
                    <h1 className='font-bold text-2xl md:text-[52px]'>THEGIVINGMOMENT</h1>
                    <div className='mt-6'>
                        <p className="flex items-center gap-2 text-xs">
                            <span className="text-[#5b9bbe]">Bag</span><IoIosArrowForward />
                            <span className="text-black">Information</span><IoIosArrowForward />
                            Shipping<IoIosArrowForward />
                            Payment
                        </p>
                    </div>
                    <Outlet></Outlet>
                    <div>
                        <div className="mt-12 mb-2">
                            <hr />
                        </div>
                        <div className="mb-4 flex gap-4">
                            <a className="text-[#5b9bbe] text-xs" href="">Refund policy</a>
                            <a className="text-[#5b9bbe] text-xs" href="">Shipping policy</a>
                            <a className="text-[#5b9bbe] text-xs" href="">Privacy policy</a>
                            <a className="text-[#5b9bbe] text-xs" href="">Terms of service</a>
                        </div>
                    </div>
                </div>

                {/* Right side */}
                <div className='col-span-5 bg-base-200 md:pr-40 md:pl-20 pt-10 pl-6 pr-6 border pb-8 md:min-h-screen'>
                    <div className="grid grid-cols-3 items-center gap-4 justify-between">
                        <div className="flex col-span-2 items-center gap-4">
                            <img className="w-16" src={img} alt="" />
                            <div>
                                <h1>Oversized Palestine Hoodie</h1>
                                <p className="text-xs">Pitch Black / M</p></div>
                        </div>
                        <p className="font-semibold">AED649.00</p>
                    </div>

                    <div className="my-6 border">
                        <hr />
                    </div>

                    <div className="flex gap-4">
                        <input placeholder="Discount code or gift card" className="w-full border py-3 rounded-md pl-3 focus:border-[#5b9bbe]" type="text" />
                        <button className="btn bg-base-300 px-6">Apply</button>
                    </div>

                    <div className="my-6">
                        <hr />
                    </div>

                    <div className="space-y-3">
                        <div className="flex justify-between items-center">
                            <p>Subtotal</p>
                            <p className=" font-semibold">AED649.00</p>
                        </div>

                        <div className="flex justify-between items-center">
                            <p>Shipping</p>
                            <p className="text-xs">Calculated at next step</p>
                        </div>
                    </div>

                    <div className="my-6">
                        <hr />
                    </div>

                    <div>
                        <div className="flex justify-between items-center">
                            <p>Total <span className="text-xs">VAT inclusive</span></p>
                            <p className="text-2xl font-semibold"> <span className="text-xs font-extralight">AED</span> AED649.00</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Payment;