

function Kids() {
    return (
        <div><div className="w-full h-fit border-t border-slate-300">
            <div className="grid grid-cols-5  gap-4">
                <div className="p-4  rounded-md">
                    <h3 className="text-sm font-medium">PRODUCTS</h3>
                    <ul className="mt-4 space-y-2">
                        <li className="hover:text-gray-700">View All Women</li>
                        <li className="hover:text-gray-700">View All Collections</li>
                        <li className="hover:text-gray-700">Lightweight Lounge</li>
                        {/* ... more product categories */}
                    </ul>
                </div>
                <div className="p-4  rounded-md">
                    <h3 className="text-sm font-medium">COLLECTIONS</h3>
                    <ul className="mt-4 space-y-2">
                        <li className="hover:text-gray-700">New Arrivals</li>
                        <li className="hover:text-gray-700">Activewear</li>
                        <li className="hover:text-gray-700">Satin Luxe</li>
                        {/* ... more product collections */}
                    </ul>
                </div>
                <div className="p-4  rounded-md">
                    <h3 className="text-sm font-medium">EDITS</h3>
                    <ul className="mt-4 space-y-2">
                        <li className="hover:text-gray-700">New Arrivals</li>
                        <li className="hover:text-gray-700">Activewear</li>
                        <li className="hover:text-gray-700">Satin Luxe</li>
                        {/* ... more product collections */}
                    </ul>
                </div>
                <div>
                    <img src="https://thegivingmovement.com/cdn/shop/files/NEW_SEASON_FEATURED_EN_360x.jpg?v=1714558962" alt="" />
                    <h1 className="mx-auto">LIGHTWEIGHT LOUNGE</h1>
                </div>
                <div>
                    <img src="https://thegivingmovement.com/cdn/shop/files/FULL_COLLECTION_2d2d5251-74d7-47a7-958b-2fc203cf9f24_220x.jpg?v=1713023571" alt="" />
                    <h1 className="mx-auto">FULL COLLECTION</h1>
                </div>

            </div>
        </div></div>
    )
}

export default Kids