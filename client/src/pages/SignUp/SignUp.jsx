import { Link } from "react-router-dom";
import { useState } from "react";
import useSignup from "../../Hooks/useSignup";

function SignUp() {
    const { signup } = useSignup();
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;
        await signup(formData);
        form.reset();
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div>
            <div>
                <div className="flex items-center my-14">
                    <div className="w-full max-w-lg mx-auto p-4 rounded-lg ">
                        <div className="text-center mb-8">
                            <h1 className="text-2xl font-fjalla font-medium text-gray-800">Create Account</h1>
                        </div>
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="flex flex-col">
                                <label htmlFor="firstName" className="text-sm font-medium text-gray-700">First Name</label>
                                <input type="text" name="firstName" id="firstName" className="px-4 py-2 rounded-sm border border-black focus:border-2 h-[50px]" required onChange={handleChange} />
                            </div>
                            <div className="flex flex-col mt-2">
                                <label htmlFor="lastName" className="text-sm font-medium text-gray-700">Last Name</label>
                                <input type="text" name="lastName" id="lastName" className="px-4 py-2 rounded-sm border border-black focus:border-2 h-[50px]" required onChange={handleChange} />
                            </div>
                            <div className="flex flex-col mt-2">
                                <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                                <input type="email" name="email" id="email" className="px-4 py-2 rounded-sm border border-black focus:border-2 h-[50px]" required onChange={handleChange} />
                            </div>
                            <div className="flex flex-col mt-2">
                                <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
                                <input type="password" name="password" id="password" className="px-4 py-2 rounded-sm border border-black focus:border-2 h-[50px]" required onChange={handleChange} />
                            </div>
                            <div className="space-x-4 ">
                                <button type="submit" className="h-[50px] mb-3 inline-block bg-[#343a40] px-4 py-2 w-[105px] text-white font-medium rounded-sm">CREATE</button>
                            </div>
                        </form>
                        <p className="text-sm ">
                            <Link to='/login' className="text-[#5b9bbe]">Log in with an existing account</Link> or <Link to='/' className="text-[#5b9bbe]">Return to Store</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
