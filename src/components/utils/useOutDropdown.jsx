import { useEffect } from "react";

const useOutDropdown = (ref, setState) => {
    useEffect(() => {
        const handleOutsideClick = (e) => {
          if (ref.current && !ref.current.contains(e.target)) {
            setState(false);
          }
        };
    
        const handleWindowMousedown = (e) => {
          handleOutsideClick(e);
        };
    
        window.addEventListener("mousedown", handleWindowMousedown);
    
        return () => {
          window.removeEventListener("mousedown", handleWindowMousedown);
        };
      }, [ref, setState]);
}

export default useOutDropdown
