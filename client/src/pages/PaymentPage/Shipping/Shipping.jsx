import { IoIosArrowBack} from "react-icons/io";
import { Link } from "react-router-dom";


const Information = () => {
    return (
        <div>
            <div className="my-6 flex justify-between items-center">
                <p className="text-2xl">Contact</p>
                <div className="flex gap-1 text-[14px]">
                    <p>Have an account?</p>
                    <a className="text-[#5b9bbe]" href="">Log in</a>
                </div>
            </div>

            <div>
                <input placeholder="Email" className="w-full border py-3 rounded-lg pl-3 focus:border-[#5b9bbe]" type="text" />
                <div className="flex gap-3 mt-4">
                    <input className="w-4 accent-[#5b9bbe]" type="checkbox" name="" id="" />
                    <p className="text-[14px]">I agree to receive updates and promotions through email and phone</p>
                </div>
            </div>

            <div>
                <p className="text-2xl py-6">Shipping Address</p>
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

                    <div className="flex gap-3 mt-4 col-span-2">
                        <input className="w-4 accent-[#5b9bbe]" type="checkbox" name="" id="" />
                        <p className="text-[14px]">Save this information for next time</p>
                    </div>

                    <div className="col-span-2 mt-6 flex md:justify-between md:items-center gap-5">
                        <a className=" flex text-[14px] items-center text-[#5b9bbe]" href=""><span className="text-[18px]"> <IoIosArrowBack /></span> Return to bag</a>
                        <Link to='/payment/shipping'> <button className="btn text-white bg-slate-900">Continue to shipping</button></Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Information;