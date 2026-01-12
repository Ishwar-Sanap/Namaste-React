import React, { useEffect } from "react";
import useMovieVideos from "../hooks/useMovieVideos";
import { useDispatch } from "react-redux";
import { addMovieTrailer } from "../redux/moviesSlice";

const VideoBackground = ({ movieId }) => {
  const dispatch = useDispatch();
  const videos = useMovieVideos(movieId);

  const filterData = videos?.filter((video) => video.type === "Trailer");
  const trailer = filterData?.length ? filterData[0] : videos?.[0];

  useEffect(() => {
    if (trailer) dispatch(addMovieTrailer(trailer));
  }, [dispatch, trailer]);


  if (!trailer) return null;
  // It should be always after hooks??
  // The reason is that hooks need to be called in the same order on every render.
  // If you put conditional statements before hooks, it can lead to hooks being called in different orders on different renders, which can cause bugs and unexpected behavior.
  // By placing the conditional return statement after the hooks, you ensure that all hooks are called in the same order regardless of the component's state or props.

  return (
    <div className="overflow-hidden">
      <iframe
        className="w-screen aspect-video scale-[1.35]"
        src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=0&mute=1&controls=0&loop=1&playlist=${trailer?.key}`}
        allow="autoplay; encrypted-media"
        title="YouTube video player"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent z-10" />
    </div>
  );
};

export default VideoBackground;
