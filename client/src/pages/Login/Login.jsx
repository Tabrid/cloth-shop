import { Link } from "react-router-dom";
import { useState } from "react";
import useLogin from "../../Hooks/useLogin";

const Login = () => {
    const { login } = useLogin();
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;
        await login(formData.email, formData.password);
        form.reset();
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div>
            <div className="flex items-center my-14">
                <div className="w-full max-w-lg mx-auto p-4 rounded-lg ">
                    <div className="text-center mb-8">
                        <h1 className="text-2xl font-fjalla font-medium text-gray-800">Login</h1>
                    </div>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div className="flex flex-col">
                            <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                            <input type="email" name="email" id="email" className="px-4 py-2 rounded-sm border border-black  focus:border-2 h-[50px]" required onChange={handleChange} />
                        </div>
                        <div className="flex flex-col relative">
                            <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
                            <input type="password" name="password" id="password" className="px-4 py-2 rounded-sm border border-black  focus:border-2 h-[50px]" required onChange={handleChange} />
                            <Link to='/reset-password'><a href="#" className="absolute mt-2 right-2 top-1/2 transform -translate-y-1/2 text-sm text-[#5b9bbe] ">Forgot your password?</a></Link>
                        </div>

                        <div className="flex space-x-4 items-center justify-between">
                            <button type="submit" className="h-[50px] inline-block bg-[#343a40] px-4 py-2 w-[95px] text-white font-medium rounded-sm">LOGIN</button>
                            <Link to='/sign-up'><a href="#" className="text-sm text-[#5b9bbe] ">Create account</a></Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
