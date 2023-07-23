import { useState } from "react";

 const useToast = () => {
  const [showPop, setShowPop] = useState([]);

  const toastClick = (message) => {
    const newToast = { id: Date.now(), message };
    setShowPop((prevToast) => [...prevToast, newToast]);
  
    const timePop = setTimeout(() => {
      setShowPop((prevToasts) =>
        prevToasts.filter((toast) => toast.id !== newToast.id)
      );
    }, 3000);
  
    return(() => {
        clearTimeout(timePop)
})
  }

  return {showPop, toastClick}
};

export default useToast
