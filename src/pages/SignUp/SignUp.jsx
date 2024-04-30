import { Link } from "react-router-dom"


function SignUp() {
  return (
    <div>
      <div>
            <div className="flex items-center my-14">
                <div className="w-full max-w-lg mx-auto p-4  rounded-lg ">
                    <div className="text-center mb-8">
                        <h1 className="text-2xl font-fjalla font-medium text-gray-800">Create Account</h1>

                    </div>
                    <form className="space-y-6">
                        <div className="flex flex-col">
                            <label htmlFor="email" className="text-sm font-medium text-gray-700">First Name</label>
                            <input type="email" name="email" id="email" className="px-4 py-2 rounded-sm border border-black  focus:border-2 h-[50px]" required />
                        </div>
                        <div className="flex flex-col mt-2">
                            <label htmlFor="email" className="text-sm font-medium text-gray-700">Last Name</label>
                            <input type="email" name="email" id="email" className="px-4 py-2 rounded-sm border border-black  focus:border-2 h-[50px]" required />
                        </div>
                        <div className="flex flex-col mt-2">
                            <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                            <input type="email" name="email" id="email" className="px-4 py-2 rounded-sm border border-black  focus:border-2 h-[50px]" required />
                        </div>
                        <div className="flex flex-col mt-2">
                            <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
                            <input type="password" name="password" id="password" className="px-4 py-2 rounded-sm border border-black  focus:border-2 h-[50px]" required />
                            
                        </div>


                        <div className="space-x-4 ">
                            <button type="submit" className="h-[50px] mb-3 inline-block bg-[#343a40] px-4 py-2 w-[105px] text-white font-medium rounded-sm">CREATE</button>
                            
                        </div>
                        
                    </form><a href="#" className=" text-sm "><Link to='/login'><span className="text-[#5b9bbe] ">Log in with an existing account</span></Link> or <Link to='/'><span className="text-[#5b9bbe] ">Return to Store</span></Link></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp