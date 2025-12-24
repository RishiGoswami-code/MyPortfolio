import React from 'react';

const DiscussionButton = () => {
  return (
    <button className="group flex items-center gap-3 bg-white text-black pl-5 pr-1 py-1 rounded-full text-xs md:text-sm font-black transition-all duration-500 hover:bg-black hover:text-white border border-white">
      <span className="uppercase tracking-tighter">Let's Discuss</span>
      <div className="bg-black group-hover:bg-white rounded-full p-2 transition-all duration-500 shadow-inner">
        <svg 
          width="14" 
          height="14" 
          viewBox="0 0 24 24" 
          className="fill-white group-hover:fill-black transition-transform duration-500 group-hover:rotate-12"
        >
          <path d="M12 2L1 21h22L12 2z" />
        </svg>
      </div>
    </button>
  );
};

export default DiscussionButton;