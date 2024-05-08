
import { BsPlusLg } from 'react-icons/bs'
import { CiHeart } from 'react-icons/ci'
import { HiOutlineMinus } from 'react-icons/hi'
import { IoIosArrowForward } from 'react-icons/io'
import { MdClose } from 'react-icons/md'
import { PiCoatHangerBold } from 'react-icons/pi'
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./style.css";
import { useState } from 'react'

function ThumbnailPlugin(mainRef) {
    return (slider) => {
        function removeActive() {
            slider.slides.forEach((slide) => {
                slide.classList.remove("active");
            });
        }
        function addActive(idx) {
            slider.slides[idx].classList.add("active");
        }

        function addClickEvents() {
            slider.slides.forEach((slide, idx) => {
                slide.addEventListener("click", () => {
                    if (mainRef.current) mainRef.current.moveToIdx(idx);
                });
            });
        }

        slider.on("created", () => {
            if (!mainRef.current) return;
            addActive(slider.track.details.rel);
            addClickEvents();
            mainRef.current.on("animationStarted", (main) => {
                removeActive();
                const next = main.animator.targetIdx || 0;
                addActive(main.track.absToRel(next));
                slider.moveToIdx(Math.min(slider.track.details.maxIdx, next));
            });
        });
    };
}


function Test2() {

    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
    });
    const [thumbnailRef] = useKeenSlider(
        {
            initial: 0,
            slides: {
                perView: 7,
                spacing: 10,
            },
        },
        [ThumbnailPlugin(instanceRef)]
    );



    const product = {
        "title": "Oversized Palestine Hoodie",
        "price": "649 AED",
        "image": [
            {
                "name": "black",
                "hex": "#000000",
                "images": [
                    {
                        "id": 1,
                        "url": "https://i.ibb.co/cgzhsrC/image.png",
                        "description": "Image 1"
                    },
                    {
                        "id": 2,
                        "url": "https://i.ibb.co/7QQhKCk/image.png",
                        "description": "Image 2"
                    },
                    {
                        "id": 3,
                        "url": "https://i.ibb.co/0rST99b/image.png",
                        "description": "Image 3"
                    }
                ]
            },
            {
                "name": "blue",
                "hex": "#0000FF",
                "images": [
                    {
                        "id": 4,
                        "url": "https://i.ibb.co/h8Wm6VJ/image.png",
                        "description": "Image 4"
                    },
                    {
                        "id": 5,
                        "url": "https://i.ibb.co/h8Wm6VJ/image.png",
                        "description": "Image 5"
                    }
                ]
            },
            {
                "name": "khaki",
                "hex": "#F0E68C",
                "images": [
                    {
                        "id": 6,
                        "url": "https://i.ibb.co/St1STgL/image.png",
                        "description": "Image 6"
                    },
                    {
                        "id": 7,
                        "url": "https://i.ibb.co/mDHtFtP/image.png",
                        "description": "Image 7"
                    }
                ]
            }
        ]
    };
    const allImageInfo = product.image.flatMap(color => color.images.map(image => ({ id: image.id, url: image.url })));
    const [picture, setPicture] = useState(allImageInfo);
    const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
    const [selectedSize, setSelectedSize] = useState(null);

    const handleSizeClick = (size) => {
        setSelectedSize(size);
    };

    return (

        <div>
            <div className="grid col-span-3">
                <div className={`px-4 md:px-40 py-12 bg-[#f8f9fa]  `}>

                    {/* left part */}
                    <div className="grid grid-cols-1 md:grid-cols-2  gap-10">
                        <div className="relative">
                            <div ref={sliderRef} className="keen-slider">
                                {
                                    picture.map((img, index) => (
                                        <div key={index} className="keen-slider__slide h-full"><img src={img.url} alt="" /></div>
                                    ))
                                }

                            </div>
                            <p className="z-50 absolute top-2 right-3 text-3xl cursor-pointer"><CiHeart /></p>
                            <div ref={thumbnailRef} className="keen-slider thumbnail">
                                {
                                    picture.map((img, index) => (
                                        <div key={index} className="keen-slider__slide h-full"><img src={img.url} alt="" /></div>
                                    ))
                                }

                            </div>
                        </div>
                        {/* right part */}
                        <div>
                            <a className="uppercase font-bold text-2xl">Oversized Palestine Hoodie</a>
                            <h1 className="pt-4 pb-6 text-xl">649 AED</h1>
                            <p className="pb-2"><span className="font-bold">Colour:</span> Pitch Black</p>
                            {/* colours */}
                            <div className="grid grid-cols-8 md:grid-cols-10">
                                {
                                    product.image.map((color, index) => (
                                        <div key={index} onClick={() => setPicture(color.images)} className="border cursor-pointer hover:border-black  w-10 h-10 flex justify-center items-center rounded-full">
                                            <div style={{ backgroundColor: color.hex }} className={` w-8 h-8 rounded-full`}></div>
                                        </div>
                                    ))
                                }
                            </div>

                            <h1 className="py-3 font-medium text-[#585858]">Size (UK) </h1>
                            <div className="grid grid-cols-7 gap-3">
                                {sizes.map((size, index) => (
                                    <p
                                        key={index}
                                        className={`border cursor-pointer text-center py-3 rounded-md ${selectedSize === size ? 'border-black' : ''}`}
                                        onClick={() => handleSizeClick(size)}
                                    >
                                        {size}
                                    </p>
                                ))}
                            </div>

                            <div>
                                <p className="rounded-md py-3 px-3 border mt-4 mb-6 grid grid-cols-12 items-center gap-3"><span className="col-span-1"><PiCoatHangerBold /> </span> <span className="col-span-10">Need Help finding the right size?</span> <IoIosArrowForward /></p>
                            </div>

                            <div className="flex gap-2">
                                <button className="border p-3 rounded-md" ><HiOutlineMinus /></button>
                                <input type="text" className="border rounded-md text-center p-2 input-bordered w-[8%]" />
                                <button className="border p-3 rounded-md" ><BsPlusLg /></button>
                            </div>

                            <button className="my-8 py-3 rounded-md w-full bg-slate-950 text-[#e4e4e4]">ADD TO BAG</button>

                            <a className="text-[#5b9bbe] underline flex items-center" href="">More Details <IoIosArrowForward /></a>
                        </div>
                        {/* finish Right Part */}
                        <button className="absolute top-1 right-1 md:top-5 md:right-5 text-2xl md:text-3xl"> <MdClose /></button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Test2