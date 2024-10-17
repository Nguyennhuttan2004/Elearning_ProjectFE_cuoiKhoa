import { Image } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const slides = [
  {
    id: 1,
    title: "Lập trình BackEnd",
    description: "Sale! Up to 50% off",
    img: "https://i.pinimg.com/originals/75/90/f8/7590f891af94580b4e7b76e6fdffbd01.gif",
    url: "/",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
  },
  {
    id: 2,
    title: "Lập trình FrontEnd",
    description: "Sale! Up to 50% off!",
    img: "https://i.pinimg.com/originals/8a/f9/a6/8af9a6cb24dcf4b9fb647c6f1e5b815c.gif",
    url: "/",
    bg: "bg-gradient-to-r from-pink-50 to-blue-50",
  },
  {
    id: 3,
    title: "Lập trình Di Động",
    description: "Sale! Up to 50% off!",
    img: "https://i.pinimg.com/originals/25/8f/e4/258fe493ca8b097f772afa4c26434d52.gif",
    url: "/",
    bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
  },
];



const Slider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(()=>{
    const interval = setInterval(()=>{
      setCurrent((prev) =>(prev === slides.length -1 ? 0 : prev + 1))
    },3000)
    return () => clearInterval(interval)
  },[])
  return (
    <div className="h-[calc(100vh-80px)] overflow-hidden">
      <div
        className="w-max h-full flex transition-all ease-in-out duration-1000"
        style={{ transform: `translateX(-${current * 100}vw)` }}
      >
        {slides.map((slide) => (
          <div
            className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`}
            key={slide.id}
          >
            {/* text container */}
            <div className="h-1/2 xl:w-1/2 xl:h-full flex flex-col items-center justify-center gap-8 2xl:gap-12 text-center">
              <h2 className="text-xl lg:text-3xl 2xl:text-5xl ">
                {slide.description}
              </h2>
              <h1 className="text-3xl lg:text-4xl 2xl:text-6xl font-semibold">
                {slide.title}
              </h1>
              <Link href={slide.url}>
                <button className="rounded-md py-3 px-4 text-white bg-black">
                  SHOW NOW
                </button>
              </Link>
            </div>
            {/* img container */}
            <div className="h-1/2 xl:w-1/2 xl:h-full relative flex items-center justify-center     ">
              <Image
                src={slide.img}
                alt=""
                sizes="100%"
                className="object-cover "
                fill = {true}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="absolute m-auto left-1/2 bottom-8 flex gap-4">
        {slides.map((slides, index) => (
          <div
            className={`w-3 h-3 rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${
              current === index ? "scale-150" : ""
            } `}
            key={slides.id}
            onClick={() => setCurrent(index)}
          >
            {current === index && (
              <div className="w-[6px] h-[6px] bg-blue-600 rounded-full"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
