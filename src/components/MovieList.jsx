import { useEffect, useState } from "react";
import Card from "./Card";
import { useParams } from "react-router-dom";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import ReactPaginate from "react-paginate";

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [error, setError] = useState(null);
  const { type } = useParams();

  const fetchData = async (page) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${
          type ? type : "now_playing"
        }?api_key=156cf752534c93d2206ccb62c8e20e1c&page=${page}`
      );

      if (!response.ok) {
        throw new Error(
          "Failed to fetch data||Data can only be fetched till page 500"
        );
      }

      const data = await response.json();
      setMovieList(data.results);
      setTotalPages(data.total_pages);
      setError(null);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchData(currentPage + 1);
  }, [currentPage, fetchData]);

  useEffect(() => {
    fetchData(currentPage + 1);
  }, [type]);

  const handlePageClick = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  const renderData = movieList.map((movie) => {
    return <Card key={movie.id} movie={movie} />;
  });

  const pageClassName =
    "transition w-12 px-4 py-2 rounded flex justify-center items-center bg-slate-600 hover:bg-slate-500";

  return (
    <div className="bg-slate-800 p-5">
      <h2 className="text-2xl font-bold ms-20">
        {(type
          ? type === "top_rated"
            ? "TOP RATED"
            : type
          : "NOW PLAYING"
        ).toUpperCase()}
      </h2>
      <div className="m-5 flex justify-center flex-wrap gap-3">
        {renderData}
      </div>
      <div className="flex justify-center">
        <ReactPaginate
          previousLabel={<FaArrowLeftLong />}
          previousLinkClassName={pageClassName}
          nextLinkClassName={pageClassName}
          nextLabel={<FaArrowRightLong />}
          breakLabel={"..."}
          pageCount={totalPages}
          marginPagesDisplayed={1}
          pageRangeDisplayed={9}
          onPageChange={handlePageClick}
          containerClassName={"w-[60rem] flex justify-between items-center"}
          pageLinkClassName={`${pageClassName} text-[0.9rem]`}
          activeLinkClassName={"bg-slate-500"}
        />
      </div>
    </div>
  );
};
export default MovieList;
