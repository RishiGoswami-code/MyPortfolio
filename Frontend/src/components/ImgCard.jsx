import React from 'react';
// 1. Import the image at the top
import myPicture from '../assets/mypicture.svg'; 

const ImgCard = ({ alt }) => {
  return (
    <div className="relative w-full aspect-[4/5] rounded-[40px] overflow-hidden border border-white/5 shadow-2xl">
      <img 
        src={myPicture} // 2. Use the imported variable
        alt={alt || "Profile"}
        className="w-full h-full object-cover"
      />
      
      <div className="absolute top-6 left-6 flex gap-2">
        <span className="px-4 py-1.5 rounded-full bg-white/90 text-black text-[10px] font-bold uppercase backdrop-blur-sm">
          Contact us
        </span>
        <span className="px-4 py-1.5 rounded-full bg-black/20 text-white text-[10px] font-medium border border-white/20 backdrop-blur-md">
          Modern
        </span>
      </div>

      <div className="absolute bottom-6 left-6 flex gap-2">
        <span className="px-4 py-2 rounded-full bg-black/40 text-white text-[10px] font-medium border border-white/10 backdrop-blur-md">
          Stylish and Rug
        </span>
      </div>
    </div>
  );
};

export default ImgCard;