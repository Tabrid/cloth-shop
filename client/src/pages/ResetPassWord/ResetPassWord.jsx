import { Link } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";

function ResetPassWord() {
    const [formData, setFormData] = useState({
        email: ""
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        fetch('/api/auth/forgot-password', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        })
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
            throw new Error('User not found');
        })
        .then((data) => {
            console.log(data);
            toast.success('Password reset instructions sent to your email.');
        })
        .catch((error) => {
            console.error('Error:', error);
            toast.error('User not found');
        });
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
                        <h1 className="text-2xl font-fjalla font-medium text-gray-800">Reset your password</h1>
                    </div>
                    <h1 className="mb-10">We will send you an email to reset your password.</h1>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div className="flex flex-col">
                            <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                            <input type="email" name="email" id="email" className="px-4 py-2 rounded-sm border border-black focus:border-2 h-[50px]" required onChange={handleChange} />
                        </div>
                        <div className="flex flex-col space-y-4 ">
                            <button type="submit" className="h-[50px] inline-block bg-[#343a40] px-4 py-2 w-[95px] text-white font-medium rounded-sm">SUBMIT</button>
                            <Link to='/login'><a href="#" className="text-sm text-[#5b9bbe] ">Cancel</a></Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ResetPassWord;
