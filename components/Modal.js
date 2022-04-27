import MuiModal from "@mui/material/Modal";
import { useCtrlContext } from "../hooks/useCtrlContext";

const Modal = () => {
  const { showModal, dispatch } = useCtrlContext();
  const handleClose = () => dispatch({ type: "MODAL",payload:false });
  return <MuiModal open={showModal} onClose={handleClose}><div className="bg-red-300 w-1/2 h-2/3"></div></MuiModal>;
};

export default Modal;
