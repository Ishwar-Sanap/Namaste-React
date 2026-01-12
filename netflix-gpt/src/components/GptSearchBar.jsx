import React, { useRef, useState } from "react";
import useSearchMovies from "../hooks/useSearchMovies";

const GptSearchBar = () => {
  const [serachQuery, setSearchQuery] = useState("");
  useSearchMovies(serachQuery);

  const searchText = useRef();

  const handleSearch = () => {
    setSearchQuery(searchText.current.value)
  };
  return (
    <div className="mt-[5%] bg-gray-900/80 text-white w-8/20 mx-auto p-3 flex justify-between ">
      <input
        ref={searchText}
        type="text"
        placeholder="What you would like to watch today?"
        className="w-8/10 mx-2 py-1.5 px-3 border border-amber-100"
      />
      <button
        className="bg-red-500 mx-2 px-8 py-1.5 rounded-2xl hover:bg-red-600 hover:cursor-pointer"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default GptSearchBar;
