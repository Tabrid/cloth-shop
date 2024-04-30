

function WishList() {
  return (
    <div>
      <div className="flex justify-between px-14">
        <div className="text-3xl uppercase font-bold text-tg-jet-09">
          MY WISHLIST
        </div>
        <div className="flex gap-5">
          <button onClick={() => document.getElementById('modal-share').showModal()} className="btn bg-[#343a40] hover:bg-[#343a40] w-28 rounded-sm text-white">SHARE</button>
          <button className="btn bg-white hover:bg-white w-28 rounded-sm  border border-black"> CLEAR</button>
        </div>
      </div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="modal-share" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <h3 className="font-bold text-xl text-center">COPY THIS URL AND SHARE IT</h3>
          <input type="text" className="w-full h-[30px] mt-2 border border-black" />
          <div className="flex justify-center mt-2">
          <button className="btn bg-[#343a40] hover:bg-[#343a40] w-1/4 rounded-sm text-white mt-2"> COPY URL</button>
          </div>
        </div>
      </dialog>
      <div className="px-14 grid grid-cols-3">
        <div className="w-[300px]">
          <div>
            <img className="h-[415px] w-[300px]" src="https://cdn.shopify.com/s/files/1/0273/2661/1491/files/S25V11PBWM_0.jpg?v=1710397495" alt="" />
          </div>
          <div className="space-y-2 mt-2">
            <h1 className="font-bold">
              Oversized T-Shirt
            </h1>
            <h1 className="text-[#868E96]">
              Oversized T-Shirt
            </h1>
            <h1 className="font-bold">
              299 AED
            </h1>
          </div>
          <div className="flex w-full mt-2">
            <button className="btn bg-white hover:bg-white w-1/2 rounded-sm h-[40px]  border border-black"> REMOVE</button>
            <button className="btn bg-[#343a40] hover:bg-[#343a40] h-[40px]  w-1/2 rounded-sm text-white"> ADD TO BAG </button>

          </div>
        </div>
      </div>
    </div>
  )
}

export default WishList