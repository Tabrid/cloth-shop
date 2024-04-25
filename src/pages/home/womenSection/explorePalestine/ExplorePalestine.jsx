
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
import { PiCoatHangerBold } from "react-icons/pi";
import { IoIosArrowForward, IoMdClose } from "react-icons/io";
import { BsPlusLg } from "react-icons/bs";
import { HiOutlineMinus } from "react-icons/hi";
import { MdClose } from "react-icons/md";


// import required modules
import { Navigation } from 'swiper/modules';
import { useState } from "react";




const ExplorePalestine = () => {

    const [mouseOver, setMouseOver] = useState(false)
    const [number, setNumber] = useState(1);
    const [quickBuy, SetQuickBuy] = useState(false)
    const [slideCard, setSlideCard] = useState(false)


    const handleSlideCard = () => {
        setSlideCard(!slideCard)
        if (!slideCard) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }


    const handleQuick = () => {
        SetQuickBuy(!quickBuy)
    }

    const handleCloseQuick = () => {
        SetQuickBuy(false)
    }



    const decreaseNumber = () => {
        if (number > 1) {
            setNumber(prevNumber => prevNumber - 1);
        }
    };

    const increaseNumber = () => {
        setNumber(prevNumber => prevNumber + 1);
    };

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
        <div>
            <div className={`relative overflow-hidden`}>
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
                                                <a className={`bg-base-100 cursor-pointer text-[12px] w-[90%] z-50 absolute bottom-4 rounded-sm font-extralight py-3 left-3 ${mouseOver ? '' : 'hidden'}`} onClick={handleQuick} >QUICK BUY</a>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide  >
                                            <div className="relative">
                                                <img className="cursor-pointer" style={handleHideImg} src={img4} alt="" />
                                                <img className="cursor-pointer" style={handleShowImg} src={img3} alt="" />
                                                <h1 className="absolute z-50 left-3 bottom-4 cursor-pointer text-[10px] bg-[#f4f4f4] text-[#626262] p-1 rounded-sm">new</h1>
                                                <p className="z-50 absolute top-2 right-3 text-3xl"><CiHeart /></p>
                                                <a className={`bg-base-100 cursor-pointer text-[12px] w-[90%] z-50 absolute bottom-4 rounded-sm font-extralight py-3 left-3 ${mouseOver ? '' : 'hidden'}`} onClick={handleQuick} >QUICK BUY</a>
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
                                                <a className={`bg-base-100 cursor-pointer text-[12px] w-[90%] z-50 absolute bottom-4 rounded-sm font-extralight py-3 left-3 ${mouseOver ? '' : 'hidden'}`} onClick={handleQuick} >QUICK BUY</a>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide  >
                                            <div className="relative">
                                                <img className="cursor-pointer" style={handleHideImg} src={img4} alt="" />
                                                <img className="cursor-pointer" style={handleShowImg} src={img3} alt="" />
                                                <h1 className="absolute z-50 left-3 bottom-4 cursor-pointer text-[10px] bg-[#f4f4f4] text-[#626262] p-1 rounded-sm">new</h1>
                                                <a className={`bg-base-100 cursor-pointer text-[12px] w-[90%] z-50 absolute bottom-4 rounded-sm font-extralight py-3 left-3 ${mouseOver ? '' : 'hidden'}`} onClick={handleQuick} >QUICK BUY</a>
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
                                                <a className={`bg-base-100 cursor-pointer text-[12px] w-[90%] z-50 absolute bottom-4 rounded-sm font-extralight py-3 left-3 ${mouseOver ? '' : 'hidden'}`} onClick={handleQuick} >QUICK BUY</a>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide  >
                                            <div className="relative">
                                                <img className="cursor-pointer" style={handleHideImg} src={img4} alt="" />
                                                <img className="cursor-pointer" style={handleShowImg} src={img3} alt="" />
                                                <h1 className="absolute z-50 left-3 bottom-4 cursor-pointer text-[10px] bg-[#f4f4f4] text-[#626262] p-1 rounded-sm">new</h1>
                                                <a className={`bg-base-100 cursor-pointer text-[12px] w-[90%] z-50 absolute bottom-4 rounded-sm font-extralight py-3 left-3 ${mouseOver ? '' : 'hidden'}`} onClick={handleQuick} >QUICK BUY</a>
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
                                                <a className={`bg-base-100 cursor-pointer text-[12px] w-[90%] z-50 absolute bottom-4 rounded-sm font-extralight py-3 left-3 ${mouseOver ? '' : 'hidden'}`} onClick={handleQuick} >QUICK BUY</a>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide  >
                                            <div className="relative">
                                                <img className="cursor-pointer" style={handleHideImg} src={img4} alt="" />
                                                <img className="cursor-pointer" style={handleShowImg} src={img3} alt="" />
                                                <h1 className="absolute z-50 left-3 bottom-4 cursor-pointer text-[10px] bg-[#f4f4f4] text-[#626262] p-1 rounded-sm">new</h1>
                                                <a className={`bg-base-100 cursor-pointer text-[12px] w-[90%] z-50 absolute bottom-4 rounded-sm font-extralight py-3 left-3 ${mouseOver ? '' : 'hidden'}`} onClick={handleQuick} >QUICK BUY</a>
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
                                                <a className={`bg-base-100 cursor-pointer text-[12px] w-[90%] z-50 absolute bottom-4 rounded-sm font-extralight py-3 left-3 ${mouseOver ? '' : 'hidden'}`} onClick={handleQuick} >QUICK BUY</a>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide  >
                                            <div className="relative">
                                                <img className="cursor-pointer" style={handleHideImg} src={img4} alt="" />
                                                <img className="cursor-pointer" style={handleShowImg} src={img3} alt="" />
                                                <h1 className="absolute z-50 left-3 bottom-4 cursor-pointer text-[10px] bg-[#f4f4f4] text-[#626262] p-1 rounded-sm">new</h1>
                                                <a className={`bg-base-100 cursor-pointer text-[12px] w-[90%] z-50 absolute bottom-4 rounded-sm font-extralight py-3 left-3 ${mouseOver ? '' : 'hidden'}`} onClick={handleQuick} >QUICK BUY</a>
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
                                                <a className={`bg-base-100 cursor-pointer text-[12px] w-[90%] z-50 absolute bottom-4 rounded-sm font-extralight py-3 left-3 ${mouseOver ? '' : 'hidden'}`} onClick={handleQuick} >QUICK BUY</a>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide  >
                                            <div className="relative">
                                                <img className="cursor-pointer" style={handleHideImg} src={img4} alt="" />
                                                <img className="cursor-pointer" style={handleShowImg} src={img3} alt="" />
                                                <h1 className="absolute z-50 left-3 bottom-4 cursor-pointer text-[10px] bg-[#f4f4f4] text-[#626262] p-1 rounded-sm">new</h1>
                                                <a className={`bg-base-100 cursor-pointer text-[12px] w-[90%] z-50 absolute bottom-4 rounded-sm font-extralight py-3 left-3 ${mouseOver ? '' : 'hidden'}`} onClick={handleQuick} >QUICK BUY</a>
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

                    </Slider>
                </div>


                {/* Quick Buy section */}
                <div>
                    <div className={`px-4 md:px-40 py-12 bg-[#f8f9fa] relative ${quickBuy ? '' : 'hidden'} `}>

                        {/* left part */}
                        <div className="grid grid-cols-1 md:grid-cols-2  gap-10">
                            <div className="relative">
                                <div >
                                    <Swiper>
                                        <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
                                        <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
                                    </Swiper>
                                </div>

                                <p className="z-50 absolute top-2 right-3 text-3xl"><CiHeart /></p>
                                <div className="mt-4">
                                    <Swiper slidesPerView={7}
                                        spaceBetween={10}
                                    >
                                        <SwiperSlide><img style={{ borderBottom: '2px solid black' }} src={img1} alt="" /></SwiperSlide>
                                        <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
                                        <SwiperSlide><img src={img3} alt="" /></SwiperSlide>
                                        <SwiperSlide><img src={img4} alt="" /></SwiperSlide>
                                        <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
                                        <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
                                        <SwiperSlide><img src={img4} alt="" /></SwiperSlide>
                                        <SwiperSlide><img src={img3} alt="" /></SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                            {/* right part */}
                            <div>
                                <a className="uppercase font-bold text-2xl">Oversized Palestine Hoodie</a>
                                <h1 className="pt-4 pb-6 text-xl">649 AED</h1>
                                <p className="pb-2"><span className="font-bold">Colour:</span> Pitch Black</p>
                                {/* colours */}
                                <div className="grid grid-cols-8 md:grid-cols-10">
                                    <div className="border hover:border-black  w-10 h-10 flex justify-center items-center rounded-full">
                                        <div className="bg-[#ff9393]  w-8 h-8  rounded-full "></div>
                                    </div>
                                    <div className="border hover:border-black  w-10 h-10 flex justify-center items-center rounded-full">
                                        <div className="bg-black  w-8 h-8  rounded-full "></div>
                                    </div>
                                    <div className="border hover:border-black  w-10 h-10 flex justify-center items-center rounded-full">
                                        <div className="bg-[#6fff9c] w-8 h-8  rounded-full "></div>
                                    </div>
                                    <div className="border hover:border-black  w-10 h-10 flex justify-center items-center rounded-full">
                                        <div className="bg-[#ffff5c] w-8 h-8  rounded-full "></div>
                                    </div>
                                    <div className="border hover:border-black  w-10 h-10 flex justify-center items-center rounded-full">
                                        <div className="bg-[#5c8fff] w-8 h-8  rounded-full "></div>
                                    </div>
                                </div>

                                <h1 className="py-3 font-medium text-[#585858]">Size (UK) </h1>
                                <div className="grid grid-cols-7 gap-3">
                                    <p className="border text-center py-3 border-black rounded-md">XS</p>
                                    <p className="border text-center py-3 rounded-md">XS</p>
                                    <p className="border text-center py-3 rounded-md">XS</p>
                                    <p className="border text-center py-3 rounded-md">XS</p>
                                    <p className="border text-center py-3 rounded-md">XS</p>
                                    <p className="border text-center py-3 rounded-md">XS</p>

                                </div>

                                <div>
                                    <p className="rounded-md py-3 px-3 border mt-4 mb-6 grid grid-cols-12 items-center gap-3"><span className="col-span-1"><PiCoatHangerBold /> </span> <span className="col-span-10">Need Help finding the right size?</span> <IoIosArrowForward /></p>
                                </div>

                                <div className="flex gap-2">
                                    <button className="border p-3 rounded-md" onClick={decreaseNumber}><HiOutlineMinus /></button>
                                    <input type="text" value={number} className="border rounded-md text-center p-2 input-bordered w-[8%]" />
                                    <button className="border p-3 rounded-md" onClick={increaseNumber}><BsPlusLg /></button>
                                </div>

                                <button onClick={handleSlideCard} className="my-8 py-3 rounded-md w-full bg-slate-950 text-[#e4e4e4]">ADD TO BAG</button>

                                <a className="text-[#5b9bbe] underline flex items-center" href="">More Details <IoIosArrowForward /></a>
                            </div>
                            {/* finish Right Part */}
                            <button onClick={handleCloseQuick} className="absolute top-1 right-1 md:top-5 md:right-5 text-2xl md:text-3xl"> <MdClose /></button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Slider card */}
            <div className="relative  ">
                <div className={`w-[80%]  bg-base-100 md:w-[40%] shadow-2xl h-screen z-[999] p-6 fixed top-0 ${slideCard ? 'right-0 transition-right duration-500' : 'right-[-620px] transition-left duration-500'}`}>
                    <h1 className="font-bold text-3xl mb-6">Shopping bag(1)</h1>
                    <div className="grid md:grid-cols-4 gap-6 relative">
                        <div>
                            <img src={img1} alt="" />
                        </div>
                        <div className="col-span-2">
                            <h1 className="text-xl font-semibold">Oversized Palestine Hoodie</h1>
                            <p>Colour: Pithch Black</p>
                            <p>Size (UK): M</p>
                            <p>8 in stock</p>
                            <div className="flex border w-20 my-5 py-2 px-2 rounded-md">
                                <button className="" onClick={decreaseNumber}><HiOutlineMinus /></button>
                                <input type="text" value={number} className=" text-center w-[100%]" />
                                <button className="" onClick={increaseNumber}><BsPlusLg /></button>
                            </div>
                        </div>
                        <div>
                            <h1>649 AED</h1>
                        </div>
                        <div>
                            <img src={img1} alt="" />
                        </div>
                        <div className="col-span-2">
                            <h1 className="text-xl font-semibold">Oversized Palestine Hoodie</h1>
                            <p>Colour: Pithch Black</p>
                            <p>Size (UK): M</p>
                            <p>8 in stock</p>
                            <div className="flex border w-20 my-5 py-2 px-2 rounded-md">
                                <button className="" onClick={decreaseNumber}><HiOutlineMinus /></button>
                                <input type="text" value={number} className=" text-center w-[100%]" />
                                <button className="" onClick={increaseNumber}><BsPlusLg /></button>
                            </div>
                        </div>
                        <div>
                            <h1>649 AED</h1>
                        </div>
                        <p onClick={handleSlideCard} className="absolute top-[-50px] right-0 text-2xl cursor-pointer"><IoMdClose /></p>
                    </div>
                    <div className="grid gap-4 mt-32">
                        <div className="flex justify-between items-center">
                            <h1 className="font-bold text-xl">Subtotal:</h1>
                            <h1 className="font-bold text-xl">3,654 AED</h1>
                        </div>
                        <p>Tax include <span className="text-[#5b9bbe]"><a href="">Shipping</a></span> calculated at checkout.</p>
                        <button className="btn bg-black text-white">CHECK OUT</button>
                    </div>
                </div>
                {/* <p onClick={handleSlideCard} className="absolute top-0 right-0 text-2xl cursor-pointer"><IoMdClose /></p> */}
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