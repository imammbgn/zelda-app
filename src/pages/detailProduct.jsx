// import ContainerDetail from "../components/Details/containerDetail"
import React from 'react';
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Suspense } from "react";

const ContainerDetail = React.lazy(() =>
  import("../components/Details/containerDetail")
);

const DetailProduct = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <ContainerDetail />
      </Suspense>
      <Footer />
    </>
  );
};

export default DetailProduct;
