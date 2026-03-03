import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";

const slides = [
  {
    id: 1,
    title: "Latest Arrivals",
    subtitle: "New • Trending - This Season's Picks",
    img: assets.yellowC,
  },
  {
    id: 2,
    title: "Men’s Topwear Collection",
    subtitle: "Shirts • Tees • Polos — Style That Speaks",
    img: assets.brownBoyC,
  },
  {
    id: 3,
    title: "Women’s Winter Collection",
    subtitle: "Cozy Sweaters • Jackets — Stay Warm, Stay Elegant",
    img: assets.upC,
  },
  {
    id: 4,
    title: "Little Styles, Big Smiles",
    subtitle: "Trendy • Comfy • Made for Play",
    img: assets.KidsC,
  },
];

const HeroSlider = () => {
  const [index, setIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Preload images (important)
  useEffect(() => {
    slides.forEach((slide) => {
      const img = new Image();
      img.src = slide.img;
    });
  }, []);

  return (
    <div className="relative w-full overflow-hidden border border-gray-200">
      
      {/* SLIDES CONTAINER */}
      <div
        className="flex transition-transform duration-700 ease-in-out will-change-transform"
        style={{
          transform: `translateX(-${index * 100}%)`,
        }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="w-full flex-shrink-0 flex flex-col sm:flex-row"
          >
            {/* LEFT TEXT */}
            <div className="w-full sm:w-1/2 flex items-center justify-center py-10">
              <div className="text-[#414141] px-5">
                <div className="flex items-center gap-2">
                  <p className="w-8 md:w-11 h-0.5 bg-[#414141]"></p>
                  <p className="font-medium text-sm md:text-base">
                    {slide.subtitle}
                  </p>
                </div>

                <h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">
                  {slide.title}
                </h1>

                <div className="flex items-center gap-2 cursor-pointer hover:opacity-70 transition">
                  <p className="font-medium text-sm md:text-base">
                    SHOP NOW
                  </p>
                  <p className="w-8 md:w-11 h-0.5 bg-[#414141]"></p>
                </div>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <img
              className="w-full sm:w-1/2 object-cover"
              src={slide.img}
              alt=""
              loading="lazy"
              draggable="false"
            />
          </div>
        ))}
      </div>

      {/* DOT INDICATORS */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full cursor-pointer transition ${
              i === index ? "bg-black" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;