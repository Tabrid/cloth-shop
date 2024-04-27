

function WishList() {
  return (
    <div>
      <div className="flex justify-between px-14">
        <div className="text-3xl uppercase font-bold text-tg-jet-09">
          MY WISHLIST
        </div>
        <div className="flex gap-5">
          <button className="btn bg-[#343a40] hover:bg-[#343a40] w-28 rounded-sm text-white">SHARE</button>
          <button className="btn bg-white hover:bg-white w-28 rounded-sm  border border-black"> CLEAR</button>
        </div>
      </div>
      <div className="px-14 grid grid-cols-3">
        <div className="w-[300px]">
          <div>
            <img className="h-[415px] w-[300px]" src="https://cdn.shopify.com/s/files/1/0273/2661/1491/files/S25V11PBWM_0.jpg?v=1710397495" alt="" />
          </div>
          <div className="flex w-full ">
            <button className="btn bg-white hover:bg-white w-1/2 rounded-sm h-[40px]  border border-black"> REMOVE</button>
            <button className="btn bg-[#343a40] hover:bg-[#343a40] h-[40px]  w-1/2 rounded-sm text-white"> ADD TO BAG </button>

          </div>
        </div>
      </div>
    </div>
  )
}

export default WishList