import { useState } from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";

const HeroVideo = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <div className="relative w-full h-[500px] sm:h-[80vh] lg:h-[550px] overflow-hidden">

      {/* ---------------------------------------------------------
         FALLBACK IMAGE (VISIBLE UNTIL VIDEO LOADS)
      ---------------------------------------------------------- */}
      {!videoLoaded && (
        <img
          src={assets.model_my8}   // 🔶 PUT YOUR FALLBACK IMAGE HERE
          className="absolute inset-0 w-full h-full object-cover"
          alt="fallback"
        />
      )}

      {/* ---------------------------------------------------------
         VIDEO BACKGROUND
      ---------------------------------------------------------- */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={assets.heroVideo2}        // 🔶 PUT YOUR VIDEO HERE
        autoPlay
        muted
        loop
        playsInline
        onLoadedData={() => setVideoLoaded(true)}
      ></video>

      {/* ---------------------------------------------------------
         TEXT SECTION - BOTTOM LEFT + SMALLER + FADE ANIMATION
      ---------------------------------------------------------- */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute bottom-10 left-10 sm:left-16 text-white"
      >
        {/* SMALLER TOP TEXT */}
        <p className="tracking-widest text-xs sm:text-sm">
          OUR LATEST COLLECTION
        </p>

        {/* MAIN TITLE (smaller than before) */}
        <h1 className="prata-regular text-2xl sm:text-4xl mt-2 leading-tight">
          New Season Drop
        </h1>

        {/* BUTTON */}
        <button className="mt-3 text-xs sm:text-sm border-b-2 border-white w-fit pb-0.5">
          SHOP NOW
        </button>
      </motion.div>
    </div>
  );
};

export default HeroVideo;
