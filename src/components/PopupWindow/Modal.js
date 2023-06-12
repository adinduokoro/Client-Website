import React from 'react'
import "./Modal.css"
import { useSelector, useDispatch } from "react-redux";
import { showModal , showPopup, showPopupImg } from '../../features/popup/popupSlice';

const Modal = () => {
  const modal = useSelector((store) => store.popup.modal)
  const dispatch = useDispatch();
  
  const handleClick = () => {
    dispatch(showModal(false))
    dispatch(showPopup(false))
    dispatch(showPopupImg(false))
  };

  return (
    <div
    className={modal ? "modal__overlay show" : "modal__overlay"}
    onClick={handleClick}
  ></div>
  )
}

export default Modal