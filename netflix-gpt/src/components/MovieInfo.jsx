import { useParams } from "react-router-dom";
import useMovieInfo from "../hooks/useMovieInfo";
import { MOVIE_POSTER_CND } from "../utils/constants";
import useRecommendedMovies from "../hooks/useRecommendedMovies";
import MovieList from "./MovieList";
import useMovieVideos from "../hooks/useMovieVideos";

const MovieInfo = () => {
  const { movieID } = useParams();
  const movieInfo = useMovieInfo(movieID);
  const recommendedMovies = useRecommendedMovies(movieID);
  const videos = useMovieVideos(movieID);

  const filterData = videos?.filter((video) => video.type === "Trailer");
  const trailer = filterData?.length ? filterData[0] : videos?.[0];

  if (!movieInfo) return null;
  return (
    <div className="mt-[5%] bg-gray-800 text-white mx-8">
      <div className="flex gap-3">
        <iframe
          className="w-1/2 aspect-video"
          src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=0&mute=0&controls=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>

        <div className="p-3 my-auto">
          <h1 className="text-4xl mb-2 font-bold">{movieInfo.title}</h1>
          <p className="m-3">{movieInfo.overview}</p>

          <div className="m-3">
            <span className="text-xl font-bold">Genres : </span>
            {movieInfo.genres.map((genere) => (
              <span key={genere.id} className="text-xl border mx-2 px-1">
                {genere.name}
              </span>
            ))}
            <p className="text-xl font-bold my-2">
              Ratings : {Number(movieInfo.vote_average).toFixed(1)} ⭐
            </p>
            <p className="text-xl font-bold my-2">
              Runtime : {movieInfo.runtime} Mins
            </p>
          </div>

          <div className="flex gap-2 m-3">
            {movieInfo.production_companies.map((company) => (
              <div key={company.id}>
                <img
                  src={MOVIE_POSTER_CND + company.logo_path}
                  alt="logo"
                  className="h-15 object-fill bg-amber-50"
                />
                <span className="">{company.name}</span>
              </div>
            ))}
          </div>
          <div></div>
        </div>
      </div>

      <div className="bg-gray-800">
        <MovieList title={"Recommended Movies"} movies={recommendedMovies} />
      </div>
    </div>
  );
};

export default MovieInfo;
