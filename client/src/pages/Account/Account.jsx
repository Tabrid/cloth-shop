

function Account() {
  return (
    <div className="px-10 my-8">
      <div className="flex justify-between">
        <h1 className="text-[#5b9bbe] cursor-pointer">Return to Store</h1>
        <h1 className="text-[#5b9bbe] cursor-pointer">Log out</h1>
      </div>
      <div className="flex mt-5">
        <div className="w-1/3 space-y-3">
          <h1 className="text-3xl font-semibold">
            My Account
          </h1>
          <h1 className="text-2xl font-semibold">
            riyadh mollik
          </h1>
          <h1>
            mollik15-5096@diu.edu.bd
          </h1>
          <h1>
            Bangladesh
          </h1>
          <h1 className="text-[#5b9bbe]">
            View Addresses (1)
          </h1>
        </div>
        <div className=" w-1/3 flex justify-center items-center">
          <h1>You haven't placed any orders yet.</h1>
        </div>
      </div>
    </div>
  )
}

export default Account