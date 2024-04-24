import navVideo from '../../assets/videos/The Giving Movement- Sustainable Activewear Clothing Dubai – The Giving Movement.mp4'


const Banner = () => {
    return (
        <div className='relative'>
            <div className='video-container md: w-full h-[680px] overflow-hidden'>
                <video autoPlay muted loop >
                    <source src={navVideo} />
                </video>
            </div>
            <a className=' text-white border border-white p-2 absolute bottom-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2' href=""> EXPLORE LIGHTWEIGHT LOUNGE</a>
        </div>
    );
};

export default Banner;