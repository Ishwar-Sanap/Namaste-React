import React from "react";
import useMovieVideos from "../hooks/useMovieVideos";
import { useDispatch } from "react-redux";
import { addMovieTrailer } from "../redux/moviesSlice";

const VideoBackground = ({ movieId }) => {
  const dispatch = useDispatch();
  const videos = useMovieVideos(movieId);
  console.log(videos);
  if (!videos) return;

  const filterData = videos.filter((video) => video.type === "Trailer");
  const trailer = filterData.length ? filterData[0] : videos[0];
  dispatch(addMovieTrailer(trailer));
  console.log(trailer);

  return (
    <div className="overflow-hidden">
      <iframe
        className="w-screen aspect-video scale-[1.35]"
        src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailer?.key}`}
        allow="autoplay; encrypted-media"
        title="YouTube video player"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent z-10" />
    </div>
  );
};

export default VideoBackground;
