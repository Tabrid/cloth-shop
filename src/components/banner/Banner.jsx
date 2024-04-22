import navVideo from '../../assets/videos/The Giving Movement- Sustainable Activewear Clothing Dubai – The Giving Movement.mp4'

const Banner = () => {
    return (
        <div>
            <div className='relative'>
                <video autoPlay muted loop>
                    <source src={navVideo} />
                </video>
                
            </div>

        </div>
    );
};

export default Banner;