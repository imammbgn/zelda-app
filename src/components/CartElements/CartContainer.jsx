import { useState } from "react";
import OrderSummary from "./OrderSummary";
import TableCart from "./TableCart";

const CartContainer = () => {
  const [total, setTotal] = useState(0);

  const tableTotal = (params) => {
    setTotal(params);
  };

  return (
    <div className="flex flex-col justify-center items-center md:max-w-[1024px] lg:max-w-[1240px] mx-auto px-3">
      <div>
      </div>
      <h1 className="text-3xl font-medium mt-10 mb-10 md:mb-20">Your Cart</h1>
      <div className="flex flex-col lg:flex-row gap-5 w-full md:h-[800px] px-2">
        <div className="flex flex-col w-12/12 md:w-[900px] md:h-[500px]">
          <TableCart totalState={tableTotal} />
        </div>
        <OrderSummary total={total} />
      </div>
    </div>
  );
};

export default CartContainer;
