import './Gallery2.css'

const Gallery2 = () => {
    return (
        <div className='mt-32'>
            <div className='grid md:grid-cols-2'>
                <div className='relative softskin w-full h-[220px] md:h-[370px]'>
                    <div className='absolute bottom-5 left-5 md:bottom-10 md:left-10'>
                        <h3 className='text-white font-bold text-[22px] md:pb-3'>SOFTSKIN</h3>
                        <a className='underline text-[10px] md:text-[12px] font-medium text-white' href="">Explore</a>
                    </div>
                </div>
                <div className='relative cotton w-full h-[220px] md:h-[370px]'>
                    <div className='absolute bottom-5 left-5 md:bottom-10 md:left-10'>
                        <h3 className='text-white font-bold text-[22px] md:pb-3'>COTTON</h3>
                        <a className='underline text-[10px] md:text-[12px] font-medium text-white' href="">Explore</a>
                    </div>
                </div>
                <div className='relative shell w-full h-[220px] md:h-[370px]'>
                    <div className='absolute bottom-5 left-5 md:bottom-10 md:left-10'>
                        <h3 className='text-white font-bold text-[22px] md:pb-3'>SHELL</h3>
                        <a className='underline text-[10px] md:text-[12px] font-medium text-white' href="">Explore</a>
                    </div>
                </div>
                <div className='relative satin w-full h-[220px] md:h-[370px]'>
                    <div className='absolute bottom-5 left-5 md:bottom-10 md:left-10'>
                        <h3 className='text-white font-bold text-[22px] md:pb-3'>SATIN</h3>
                        <a className='underline text-[10px] md:text-[12px] font-medium text-white' href="">Explore</a>
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default Gallery2;