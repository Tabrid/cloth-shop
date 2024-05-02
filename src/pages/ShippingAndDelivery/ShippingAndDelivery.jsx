import React from 'react';

const ShippingAndDelivery = () => {
    return (
        <div>
            <h1 className='text-center text-2xl font-bold mt-10'>Shipping And Delivery</h1>
            <div className='md:w-full md:h-96 overflow-hidden mt-24'>
                <img className='px-10 -mt-[32rem] w-full' src="https://thegivingmovement.com/cdn/shop/files/SHIPPING-info_900x.jpg?v=1685703284&quot" alt="" />
            </div>

            <div className='flex text-center justify-center gap-4 mt-4'>
                <p className='font-bold'>UNITED ARAB EMIRATES</p>
                <img src="https://thegivingmovement.com/cdn/shop/files/ae.png?v=1686205163" alt="" />
                <p className='font-bold'>CHANGE COUNTRY</p>
            </div>

            <div className='px-72 mt-8'>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <tbody>
                            <tr >
                                <th className='font-bold'>Shipping Method</th>
                                <th className='font-bold'>City</th>
                                <th className='font-bold'>Cut Off</th>
                                <th className='font-bold'>Delivery Time</th>
                                <th className='font-bold'>Cost</th>
                            </tr>
                        </tbody>
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <td>Same Day Delivery</td>
                                <td>Dubai</td>
                                <td>4pm (excl. Sunday)</td>
                                <td>Same Day</td>
                                <td>15 AED</td>
                            </tr>
                            {/* row 1 */}
                            <tr>
                                <td>Same Day Delivery</td>
                                <td>Dubai</td>
                                <td>4pm (excl. Sunday)</td>
                                <td>Same Day</td>
                                <td>15 AED</td>
                            </tr>
                            {/* row 1 */}
                            <tr>
                                <td>Same Day Delivery</td>
                                <td>Dubai</td>
                                <td>4pm (excl. Sunday)</td>
                                <td>Same Day</td>
                                <td>15 AED</td>
                            </tr>
                            {/* row 1 */}
                            <tr>
                                <td>Same Day Delivery</td>
                                <td>Dubai</td>
                                <td>4pm (excl. Sunday)</td>
                                <td>Same Day</td>
                                <td>15 AED</td>
                            </tr>
                           
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default ShippingAndDelivery;