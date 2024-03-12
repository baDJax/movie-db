import { GiAbstract026 } from "react-icons/gi";
import { Link } from "react-router-dom";

const Header = () => {
  const spanStyle = "transition text-xl m-7 cursor-pointer hover:text-gray-200";
  return (
    <div className=" bg-slate-900 h-16 flex justify-between items-center px-3 py-2 drop-shadow-md">
      <div className="flex items-center">
        <Link to="/">
          <GiAbstract026 className="cursor-pointer" color="white" size={50} />
        </Link>
        <Link to="/movies/popular">
          <span className={spanStyle}>Popular</span>
        </Link>
        <Link to="/movies/top_rated">
          <span className={spanStyle}>Top Rated</span>
        </Link>
        <Link to="/movies/upcoming">
          <span className={spanStyle}>Upcoming</span>
        </Link>
      </div>
    </div>
  );
};
export default Header;
