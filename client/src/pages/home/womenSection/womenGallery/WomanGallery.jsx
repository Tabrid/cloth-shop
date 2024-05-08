
import './WomanGallery.css'
const WomanGallery = () => {
    return (
        <div>
            <div className='relative new-season w-full h-[300px] md:h-[620px]'>
                <div className='absolute bottom-5 left-5 md:bottom-10 md:left-10'>
                    <h3 className='text-white md:text-3xl font-bold text-[22px] md:pb-3'>NEW SEASON</h3>
                    <a className='underline text-[10px] md:text-[12px] font-medium text-white' href="">Explore</a>
                </div>
            </div>
            <div className='relative full-collection w-full h-[300px] md:h-[620px]'>
                <div className='absolute bottom-5 left-5 md:bottom-10 md:left-10'>
                    <h3 className='text-white font-bold text-[22px] md:pb-3'>FULL COLLECTION</h3>
                    <a className='underline text-[10px] md:text-[12px] font-medium text-white' href="">Explore</a>
                </div>
            </div>
            <div className='p-6 md:p-10'>
                <div className='relative satin-luxe w-full h-[400px] md:h-[620px]'>
                    <div className='absolute bottom-5 left-5 md:bottom-20 md:left-20'>
                        <p className='text-white md:pb-3 md:w-full text-[.8em] md:text-[12px] font-medium'>Modest silhouettes meet timeless evening wear</p>
                        <h3 className='text-white font-bold text-[22px] md:pb-3'>SATIN LUXE</h3>
                        <a className='underline text-[10px] md:text-[12px] font-medium text-white' href="">Explore</a>
                    </div>
                </div>
            </div>

            <div className='grid md:grid-cols-2'>
                <div className='relative active1 w-full h-[220px] md:h-[370px]'>
                    <div className='absolute bottom-5 left-5 md:bottom-10 md:left-10'>
                        <h3 className='text-white font-bold text-[22px] md:pb-3'>ACTIVE</h3>
                        <a className='underline text-[10px] md:text-[12px] font-medium text-white' href="">Explore</a>
                    </div>
                </div>
                <div className='relative lounge w-full h-[220px] md:h-[370px]'>
                    <div className='absolute bottom-5 left-5 md:bottom-10 md:left-10'>
                        <h3 className='text-white font-bold text-[22px] md:pb-3'>LOUNGE</h3>
                        <a className='underline text-[10px] md:text-[12px] font-medium text-white' href="">Explore</a>
                    </div>
                </div>
                <div className='relative streetwear w-full h-[220px] md:h-[370px]'>
                    <div className='absolute bottom-5 left-5 md:bottom-10 md:left-10'>
                        <h3 className='text-white font-bold text-[22px] md:pb-3'>STREETWEAR</h3>
                        <a className='underline text-[10px] md:text-[12px] font-medium text-white' href="">Explore</a>
                    </div>
                </div>
                <div className='relative seamless w-full h-[220px] md:h-[370px]'>
                    <div className='absolute bottom-5 left-5 md:bottom-10 md:left-10'>
                        <h3 className='text-white font-bold text-[22px] md:pb-3'>SEAMLESS 2.0</h3>
                        <a className='underline text-[10px] md:text-[12px] font-medium text-white' href="">Explore</a>
                    </div>
                </div>
            </div>
            <div className='p-6 md:p-10'>
                <div className='relative palestine w-full h-[400px] md:h-[620px]'>
                    <div className='absolute bottom-5 left-5 md:bottom-20 md:left-20'>
                        <p className='text-white md:pb-3 md:w-full text-[.8em] md:text-[12px] font-medium'>FOR THE LAND OF OLIVES AND ZA'ATAR</p>
                        <h3 className='text-white font-bold text-[22px] md:pb-3'>PALESTINE CAPSULE</h3>
                        <a className='underline text-[10px] md:text-[12px] font-medium text-white' href="">Explore COLLECTION</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WomanGallery;