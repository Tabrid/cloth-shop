
import { Link } from 'react-router-dom';

const ReturnsAndFunds = () => {
    return (
        <div>
            <h1 className='text-center font-bold text-2xl mb-24 mt-10'>RETURNS & REFUNDS</h1>
            <div className='md:w-full md:h-96 overflow-hidden'>
                <img className='px-10 -mt-[36rem] w-full' src="https://thegivingmovement.com/cdn/shop/files/FAQ-returns_900x.jpg?v=1685703285&quot" alt="" />
            </div>
            <div className='mt-12 px-72'>
                <Link to='/return'><button className="btn w-full text-white bg-green-500 hover:bg-green-500">CREATE RETURN</button></Link>
                <div className='mt-4'>
                    <div className="collapse collapse-plus ">
                        <input type="radio" name="my-accordion-3" defaultChecked />
                        <div className="collapse-title text-xl font-medium">
                            Click to open this one and close others
                        </div>
                        <div className="collapse-content">
                            <p>hello</p>
                        </div>
                    </div>
                    <hr />
                    <div className="collapse collapse-plus ">
                        <input type="radio" name="my-accordion-3" defaultChecked />
                        <div className="collapse-title text-xl font-medium">
                            Click to open this one and close others
                        </div>
                        <div className="collapse-content">
                            <p>hello</p>
                        </div>
                    </div>
                    <hr />
                    <div className="collapse collapse-plus ">
                        <input type="radio" name="my-accordion-3" defaultChecked />
                        <div className="collapse-title text-xl font-medium">
                            Click to open this one and close others
                        </div>
                        <div className="collapse-content">
                            <p>hello</p>
                        </div>
                    </div>
                    <hr />
                    <div className="collapse collapse-plus ">
                        <input type="radio" name="my-accordion-3" defaultChecked />
                        <div className="collapse-title text-xl font-medium">
                            Click to open this one and close others
                        </div>
                        <div className="collapse-content">
                            <p>hello</p>
                        </div>
                    </div>
                    <hr />
                    <div className="collapse collapse-plus ">
                        <input type="radio" name="my-accordion-3" defaultChecked />
                        <div className="collapse-title text-xl font-medium">
                            Click to open this one and close others
                        </div>
                        <div className="collapse-content">
                            <p>hello</p>
                        </div>
                    </div>
                    <hr />
                    <div className="collapse collapse-plus ">
                        <input type="radio" name="my-accordion-3" defaultChecked />
                        <div className="collapse-title text-xl font-medium">
                            Click to open this one and close others
                        </div>
                        <div className="collapse-content">
                            <p>hello</p>
                        </div>
                    </div>
                    <hr />
                    <div className="collapse collapse-plus ">
                        <input type="radio" name="my-accordion-3" defaultChecked />
                        <div className="collapse-title text-xl font-medium">
                            Click to open this one and close others
                        </div>
                        <div className="collapse-content">
                            <p>hello</p>
                        </div>
                    </div>
                    <hr />
                </div>
            </div>


        </div>
    );
};

export default ReturnsAndFunds;