import { useEffect, useRef, MutableRefObject, ReactElement } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }: { children: ReactElement }) => {
  const el: MutableRefObject<HTMLDivElement | null> = useRef(null);

  if (!el.current) {
    el.current = document.createElement("div");
  }

  useEffect(() => {
    const modalContainer = document.getElementById("modal");

    if (!modalContainer || !el.current) {
      return;
    }
    modalContainer.appendChild(el.current);
    return () => {
      el.current ? modalContainer.removeChild(el.current) : null;
    };
  }, []);

  return createPortal(<div>{children}</div>, el.current);
};

export default Modal;
