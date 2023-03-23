import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  const el = useRef(null);
  if (!el.current) {
    el.current = document.createElement("div");
  }

  useEffect(() => {
    const modalContainer = document.getElementById("modal");
    modalContainer.appendChild(el.current);
    return () => {
      modalContainer.removeChild(el.current);
    };
  }, []);

  return createPortal(<div>{children}</div>, el.current);
};

export default Modal;
