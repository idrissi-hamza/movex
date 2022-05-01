import MuiModal from "@mui/material/Modal";
import { useCtrlContext } from "../hooks/useCtrlContext";
import Image from "next/image";

const Modal = () => {
  const { showModal, dispatch, movie } = useCtrlContext();
  const handleClose = () => dispatch({ type: "MODAL", payload: false });
  return (
    <MuiModal open={showModal} onClose={handleClose}>
      <div className="grid grid-cols-3 bg-gray-300/90 w-full sm:w-1/2 py-5 pl-1 sm:pl-5  center sm:rounded-lg absolute ">
        <div className=" flex items-center">
          <Image
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            className="rounded-sm  md:rounded "
            width={200}
            height={300}
            alt='movie poster'
          />
        </div>
        <div className="text-gray-800 col-span-2 p-2  space-y-2">
          <h1 className=" font-bold mb-3 text-xl ">{movie.title||movie.original_name}</h1>
          <p className="font-semibold">{movie.release_date||movie.first_air_date}</p>
          <p>{movie.overview}</p>
          {/* <pre className="text-black">{JSON.stringify(movie,null,2)}</pre> */}
        </div>
      </div>
    </MuiModal>
  );
};

export default Modal;
