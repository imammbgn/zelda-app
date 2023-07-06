import { useState } from "react";

export const useNotifCart = () => {
  const [isEmptyCart, setIsEmptyCart] = useState(false);

  const handleEmptyCart = () => {
    setIsEmptyCart(!isEmptyCart);
    setTimeout(() => {
      setIsEmptyCart(false);
    }, 2500);
    return clearTimeout();
  };

  return { isEmptyCart, handleEmptyCart };
};
