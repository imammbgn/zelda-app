import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const useReduceQty = () => {
  const cart = useSelector((state) => state.cart.data);
  const [totalQty, setTotalQty] = useState(0);

  useEffect(() => {
    const cartQty = cart
      .map((item) => item.qty)
      .reduce((acc, curr) => acc + curr, 0);
    setTotalQty(cartQty);
  }, [cart]);

  return totalQty
};
