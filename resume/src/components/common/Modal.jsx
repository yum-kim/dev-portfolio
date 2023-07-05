import React from 'react';
import { useState, useRef, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { BsXLg } from "react-icons/bs";

const Modal = ({ children, onClose }) => {
    const [mounted, setMounted] = useState(false);
    const modalRootRef = useRef(null);

    const unlockScroll = useCallback(() => {
        document.body.style.overflow = "auto";
    }, []);
        
    const lockScroll = useCallback(() => {
        document.body.style.overflow = "hidden";
    }, []);

    useEffect(() => {
        setMounted(true);    
        if(document) {
            const dom = document.getElementById('modal');
            modalRootRef.current = dom;
        }

        lockScroll();
        return () => unlockScroll();
    }, [])
 
  const modal = (
    <>
      <div className="modalBg" onClick={onClose}></div>
      <div className="modal">
        <button className="modal-close-btn" onClick={onClose}>
          <BsXLg />
        </button>
        {children}
      </div>
    </>
  );

    if (modalRootRef.current && mounted) {
        return createPortal(modal, modalRootRef.current);
    }
};

export default Modal;