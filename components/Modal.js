import MuiModal from "@mui/material/Modal";
import { useCtrlContext } from "../hooks/useCtrlContext";
import Image from "next/image";
import { BookmarkIcon as BookmarkIconSolid } from "@heroicons/react/solid";
import { BookmarkIcon as BookmarkIconOutline } from "@heroicons/react/outline";
import { useFirestore } from "../hooks/useFirestore";
import { useAuthContext } from "../hooks/useAuthContext";
import { useCollection } from "../hooks/useCollection";
import BasicRating from "./BasicRating";
import { XIcon } from "@heroicons/react/outline";

const Modal = () => {
  const { addDocument, deleteDocument, response } = useFirestore("watchlist");
  const { user } = useAuthContext();

  const { documents, error } = useCollection(
    "watchlist",
    ["uid", "==", user.uid],
    ["createdAt", "desc"]
  );

  const { showModal, dispatch, movie } = useCtrlContext();
  const handleClose = () => dispatch({ type: "MODAL", payload: false });

  let isInWatchlist;
  if (documents) {
    isInWatchlist = documents.map((doc) => doc.movie.id).includes(movie.id);
  }

  // const isInWatchlist = true;
  const handleClick = () => {
    !isInWatchlist && addDocument({ uid: user.uid, mid: movie.id, movie });
    isInWatchlist && deleteDocument(movie.id);
  };

  const rating = movie.vote_average / 2;
  return (
    <MuiModal open={showModal} onClose={handleClose}>
      <div className=" grid grid-cols-3 bg-gray-300/90 w-full sm:w-1/2 py-5 pl-1 sm:pl-5  center sm:rounded-lg absolute relative  ">
        <XIcon onClick={handleClose} className="w-6 h-6 absolute top-2 right-2 text-yellow-600 hover:bg-yellow-300 rounded" />
        <div className=" flex items-center flex-col">
          <Image
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            className="rounded-sm  md:rounded "
            width={200}
            height={300}
            alt="movie poster"
          />
          <button
            className="flex items-center justify-center bg-yellow-400/50 hover:bg-yellow-500/70 active:bg-yellow-600 px-3 py-1 cursor-pointer rounded-md text-yellow-900 mt-4"
            onClick={handleClick}
          >
            {!isInWatchlist && (
              <div className="flex items-center text-sm">
                <BookmarkIconOutline className="w-5 h-5 mr-1 " /> Add to
                Watchlist
              </div>
            )}
            {isInWatchlist && (
              <div className="flex items-center text-sm">
                <BookmarkIconSolid className="w-5 h-5  mr-1" />
                Added to Watchlist
              </div>
            )}
          </button>
        </div>
        <div className=" text-gray-800 col-span-2 p-2  spacey-2">
          <h1 className=" font-bold mb-2 text-xl ">
            {movie.title || movie.original_name}
          </h1>
          <p className="font-semibold mb-2">
            {movie.release_date || movie.first_air_date}
          </p>
          <BasicRating rating={rating} />
          <p className="mt-2">{movie.overview}</p>
          {/* <pre className="text-black">{JSON.stringify(movie, null, 2)}</pre> */}
        </div>
      </div>
    </MuiModal>
  );
};

export default Modal;
