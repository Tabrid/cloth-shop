

function Return() {
    return (
        <div>
            <div className=" min-h-screen ">
                <div className=" flex flex-row-reverse">
                    <div className="text-center lg:text-left w-2/3">

                        <img src="https://i.ibb.co/mFdPrZN/image.png" alt="" />
                    </div>
                    <div className="card shrink-0   w-1/3">
                        <h1 className="ml-10 text-2xl font-semibold">Returns</h1>
                        <p className="ml-10 mt-2">Enter your order information to get started.</p>
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Order ID*</span>
                                </label>
                                <input type="text" placeholder="Enter Order ID" className="input input-bordered h-[36px]" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email ID*</span>
                                </label>
                                <input type="email" placeholder="Enater Your Email" className="input input-bordered h-[36px]" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#414040] hover:bg-[#414040] h-[36px] text-white">NEXT</button>
                            </div>
                            <div className="form-control mt-6">
                                <h1 className="text-base font-semibold text-center">Our Returns & Exchange Policy</h1>
                            </div>
                            <div className="divider"></div> 
                            <div className="form-control ">
                                <h1 className="text-base font-semibold text-center">Refund Policy | Terms & Conditions</h1>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Return