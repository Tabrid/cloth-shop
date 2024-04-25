import navVideo from '../../assets/videos/The Giving Movement- Sustainable Activewear Clothing Dubai – The Giving Movement.mp4'


const Banner = () => {
    return (
        <div className='relative'>
            <div className='video-container md: w-full md:h-[680px] overflow-hidden'>
                <video autoPlay muted loop >
                    <source src={navVideo} />
                </video>
            </div>
            <a className=' text-white p-1 md:text-[16px] text-[10px] border border-white md:p-2 absolute md:bottom-20 bottom-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2' href=""> EXPLORE LIGHTWEIGHT LOUNGE</a>
        </div>
    );
};

export default Banner;