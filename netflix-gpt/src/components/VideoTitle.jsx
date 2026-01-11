import React from "react";

const VideoTitle = ({ title, overview }) => {
 return (
    <div className="absolute inset-0 flex items-center z-20">
      <div className="mx-8 w-3/10 text-white">
        <h1 className="text-5xl font-bold">{title}</h1>
        <p className="py-5 text-sm">{overview}</p>

        <div className="flex gap-3">
          <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:opacity-80">
            ▶ Play
          </button>
          <button className="bg-gray-500/70 px-8 py-3 rounded-lg text-white">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
