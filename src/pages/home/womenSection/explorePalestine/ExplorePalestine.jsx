
import Slider from "react-slick";
import { Swiper, SwiperSlide } from 'swiper/react';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import "./Explore-theme.css"
import './Explore-Slick.css'

// Import Swiper styles
import './SwiperJS.css';
import 'swiper/css/navigation';
import './style.css'

import img1 from '../../../../assets/images/S14PW1V11PBWM_0_2048x.webp'
import img2 from '../../../../assets/images/S14PW1V11PBWM_1.webp'
import img3 from '../../../../assets/images/S106V12PBWM_1.jpg'
import img4 from '../../../../assets/images/S106V12PBWM_2.webp'

import { CiHeart } from "react-icons/ci";



// import required modules
import { Navigation } from 'swiper/modules';
import { useState } from "react";



const ExplorePalestine = () => {

    const [mouseOver, setMouseOver] = useState(false)

    const handleOnMouseEnter = () => {
        setMouseOver(true)

    };
    const handleOnMouseLeave = () => {

        setMouseOver(false)

    };

    const handleShowImg = {
        display: mouseOver ? 'grid' : 'none'
    }
    const handleHideImg = {
        display: mouseOver ? 'none' : 'grid'
    }

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="relative mt-6">
            <h1 className="font-bold  md:text-xl text-center">EXPLORE PALESTINE</h1>
            <div className=" overflow-hidden md:mt-8">
                <Slider {...settings}>
                    {/* Card Start */}
                    <div>
                        <div className="card bg-base-100 md:w-full w-[80%] mx-auto">
                            {/* Swiper div. single card contains all images */}
                            <div onMouseOver={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave} >
                                <Swiper
                                    slidesPerView={1}
                                    spaceBetween={30}
                                    loop={true}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    navigation={true}
                                    modules={[Navigation]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide  >
                                        <div className="relative">
                                            <img className="cursor-pointer" style={handleHideImg} src={img1} alt="" />
                                            <img className="cursor-pointer" style={handleShowImg} src={img2} alt="" />
                                            <h1 className="absolute z-50 left-3 bottom-4 cursor-pointer text-[10px] bg-[#f4f4f4] text-[#626262] p-1 rounded-sm">new</h1>
                                            <p className="z-50 absolute top-2 right-3 text-3xl"><CiHeart /></p>
                                            <button className={`bg-base-100 text-[12px] w-[90%] z-50 absolute bottom-4 rounded-sm font-extralight py-3 left-3 ${mouseOver ? '' : 'hidden'}`}>QUICK BUY</button>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide  >
                                        <div className="relative">
                                            <img className="cursor-pointer" style={handleHideImg} src={img4} alt="" />
                                            <img className="cursor-pointer" style={handleShowImg} src={img3} alt="" />
                                            <h1 className="absolute z-50 left-3 bottom-4 cursor-pointer text-[10px] bg-[#f4f4f4] text-[#626262] p-1 rounded-sm">new</h1>
                                            <p className="z-50 absolute top-2 right-3 text-3xl"><CiHeart /></p>
                                            <button className={`bg-base-100 text-[12px] w-[90%] z-50 absolute bottom-4 rounded-sm font-extralight py-3 left-3 ${mouseOver ? '' : 'hidden'}`}>QUICK BUY</button>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                            <div className="card-body py-0 pl-0 pr-4">
                                <p className="text-[10px] py-2">ETHICAL INDIAN ORGANIC COTTON BLEND</p>
                                <p className="-mt-4 text-[18px]">Oversized Palestine T-Shirt 349 AED</p>
                                {/* color div */}
                                <div className="grid grid-cols-5">
                                    <div className="border hover:border-black  w-8 h-8 flex justify-center items-center rounded-full">
                                        <div className="bg-[#ff9393]  w-6 h-6  rounded-full "></div>
                                    </div>
                                    <div className="border hover:border-black  w-8 h-8 flex justify-center items-center rounded-full">
                                        <div className="bg-black  w-6 h-6  rounded-full "></div>
                                    </div>
                                    <div className="border hover:border-black  w-8 h-8 flex justify-center items-center rounded-full">
                                        <div className="bg-[#6fff9c] w-6 h-6  rounded-full "></div>
                                    </div>
                                    <div className="border hover:border-black  w-8 h-8 flex justify-center items-center rounded-full">
                                        <div className="bg-[#ffff5c] w-6 h-6  rounded-full "></div>
                                    </div>
                                    <div className="border hover:border-black  w-8 h-8 flex justify-center items-center rounded-full">
                                        <div className="bg-[#5c8fff] w-6 h-6  rounded-full "></div>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* first card finish */}
                    {/* Card Start */}
                    <div>
                        <div className="card bg-base-100 md:w-full w-[80%] mx-auto">
                            {/* Swiper div. single card contains all images */}
                            <div onMouseOver={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave} >
                                <Swiper
                                    slidesPerView={1}
                                    spaceBetween={30}
                                    loop={true}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    navigation={true}
                                    modules={[Navigation]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide  >
                                        <div className="relative">
                                            <img className="cursor-pointer" style={handleHideImg} src={img1} alt="" />
                                            <img className="cursor-pointer" style={handleShowImg} src={img2} alt="" />
                                            <h1 className="absolute z-50 left-3 bottom-4 cursor-pointer text-[10px] bg-[#f4f4f4] text-[#626262] p-1 rounded-sm">new</h1>
                                            <p className="z-50 absolute top-2 right-3 text-3xl"><CiHeart /></p>
                                            <button className={`bg-base-100 text-[12px] w-[90%] z-50 absolute bottom-4 rounded-sm font-extralight py-3 left-3 ${mouseOver ? '' : 'hidden'}`}>QUICK BUY</button>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide  >
                                        <div className="relative">
                                            <img className="cursor-pointer" style={handleHideImg} src={img4} alt="" />
                                            <img className="cursor-pointer" style={handleShowImg} src={img3} alt="" />
                                            <h1 className="absolute z-50 left-3 bottom-4 cursor-pointer text-[10px] bg-[#f4f4f4] text-[#626262] p-1 rounded-sm">new</h1>
                                            <p className="z-50 absolute top-2 right-3 text-3xl"><CiHeart /></p>
                                            <button className={`bg-base-100 text-[12px] w-[90%] z-50 absolute bottom-4 rounded-sm font-extralight py-3 left-3 ${mouseOver ? '' : 'hidden'}`}>QUICK BUY</button>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                            <div className="card-body py-0 pl-0 pr-4">
                                <p className="text-[10px] py-2">ETHICAL INDIAN ORGANIC COTTON BLEND</p>
                                <p className="-mt-4 text-[18px]">Oversized Palestine T-Shirt 349 AED</p>
                                {/* color div */}
                                <div className="grid grid-cols-5">
                                    <div className="border hover:border-black  w-8 h-8 flex justify-center items-center rounded-full">
                                        <div className="bg-[#ff9393]  w-6 h-6  rounded-full "></div>
                                    </div>
                                    <div className="border hover:border-black  w-8 h-8 flex justify-center items-center rounded-full">
                                        <div className="bg-black  w-6 h-6  rounded-full "></div>
                                    </div>
                                    <div className="border hover:border-black  w-8 h-8 flex justify-center items-center rounded-full">
                                        <div className="bg-[#6fff9c] w-6 h-6  rounded-full "></div>
                                    </div>
                                    <div className="border hover:border-black  w-8 h-8 flex justify-center items-center rounded-full">
                                        <div className="bg-[#ffff5c] w-6 h-6  rounded-full "></div>
                                    </div>
                                    <div className="border hover:border-black  w-8 h-8 flex justify-center items-center rounded-full">
                                        <div className="bg-[#5c8fff] w-6 h-6  rounded-full "></div>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* first card finish */}
                    <div>
                        <div className="card bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card  bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
            <style>{`
                .swiper-button-prev,
                .swiper-button-next {
                visibility: ${mouseOver ? 'visible !important' : 'hidden'};
                }
      `}</style>
        </div>
    );
};

export default ExplorePalestine;