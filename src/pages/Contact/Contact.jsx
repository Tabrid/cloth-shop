


function Contact() {
  return (
    <div>
      <div className="flex justify-center">
        <h1 className="text-xl font-fjalla font-semibold leading-8 my-10">CONTACT US</h1>
      </div>
      <img className="px-10" src="https://i.ibb.co/vXzPKdh/image.png" alt="" />

      <div className="flex justify-center mt-10">

        <div className="w-4/6 grid grid-cols-2 gap-5 [&>label>p]:py-2">
          <h1 className="col-span-2 text-2xl font-fjalla font-semibold">Drop us a line</h1>
          <label htmlFor="firstName" className="">
            <p className="capitalize font-semibold">Name</p>
            <input className="border-[2px] border-black/25 rounded p-3 w-full outline-none font-medium" type="text" name="firstName" id="firstName" />
          </label>
          <label htmlFor="email" className="">
            <p className="capitalize font-semibold">Email</p>
            <input className="border-[2px] border-black/25 rounded p-3 w-full outline-none font-medium" type="text" name="email" id="email" />
          </label>
          <label htmlFor="phone" className=" col-span-2">
            <p className="capitalize font-semibold">Phone</p>
            <input className="border-[2px] border-black/25 rounded p-3 w-full outline-none font-medium" type="tel" name="phone" id="phone" />
          </label>
          <label htmlFor="message" className=" col-span-2">
            <p className="capitalize font-semibold">Message</p>
            <textarea className="border-[2px] border-black/25 rounded p-3 w-full outline-none font-medium" name="message" id="message" cols="30" rows="10" placeholder="Enter your message"></textarea>
          </label>
          <button className="btn w-1/4 bg-slate-700 text-white hover:bg-slate-700">
            SEND
          </button>
        </div>


      </div>


    </div>
  )
}

export default Contact