import { FaArrowRightLong } from "react-icons/fa6";

const Card = ({ movie }) => {
  return (
    <div className="m-1 bg-slate-600 text-white shadow-md h-[360px] w-[250px] rounded-md overflow-hidden">
      <div className="h-[50%] overflow-hidden">
        <img
          className="w-full"
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt="Couldn't load image"
        />
      </div>
      <div className="p-[0.9rem] h-[50%] flex flex-col justify-around">
        <h3 className="font-bold text-xl">
          {`${movie.original_title.slice(0, 26)} ${
            movie.original_title.length >= 26 ? "..." : ""
          }`}
        </h3>
        <p className="font-medium text-xs">
          {`${movie.overview.slice(0, 108)} ${
            movie.overview.length >= 108 ? "..." : ""
          }`}
        </p>
        <button className="rounded-md transition hover:bg-slate-800 w-[6.5rem] px-2 py-1 flex items-center justify-around text-[13px] bg-slate-700 ">
          <p>Read more</p> <FaArrowRightLong />
        </button>
      </div>
    </div>
  );
};
export default Card;
