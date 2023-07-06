import React, { Suspense } from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const CartContainer = React.lazy(() =>
  import("../components/CartElements/CartContainer")
);

const Cart = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div>loading..</div>}>
        <CartContainer />
      </Suspense>
      <Footer />
    </>
  );
};

export default Cart;
