import img1 from '../../../../assets/images/NEW_SEASON_835d7d4f-ea2a-4fce-b868-51814a76811b_1512x.webp'
import img2 from '../../../../assets/images/FULL_COLLECTION_a41b457f-13ad-4ddd-9647-887ff359434f_1512x.webp'
import img3 from '../../../../assets/images/SATIN_c803e23a-b68c-4f68-a7ff-06b70328a160_1950x.webp'
const WomanGallery = () => {
    return (
        <div>
            <div className='relative'>
                <img className='w-full h-auto' src={img1} alt="" />
                <div className='absolute bottom-10 left-10'>
                    <h3 className='text-white md:text-3xl md:pb-4'>NEW SEASON</h3>
                    <a className='underline text-white' href="">Explore</a>
                </div>
            </div>
            <div className='relative'>
                <img className='w-full h-auto' src={img2} alt="" />
                <div className='absolute bottom-10 left-10'>
                    <h3 className='text-white md:text-3xl md:pb-4'>FULL COLLECTION</h3>
                    <a className='underline text-white' href="">Explore</a>
                </div>
            </div>
            <div className='relative p-10'>
                <img className='w-full h-auto' src={img3} alt="" />
                <div className='absolute bottom-20 left-20'>
                    <p className='text-white md:pb-4'>Modest silhouettes meet timeless evening wear</p>
                    <h3 className='text-white md:text-3xl md:pb-4'>SATIN LUXE</h3>
                    <a className='underline text-white' href="">Explore</a>
                </div>
            </div>
        </div>
    );
};

export default WomanGallery;