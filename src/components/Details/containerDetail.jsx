import DescriptionProduct from "./Element/DescriptionProduct";
import HeroProduct from "./Element/HeroProduct";
import ProductVariants from "./Element/ProductVariants";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cartSlice"
import useGet from "../../config/api";

const ContainerDetail = () => {
  const params = useParams();
  const [product, setProduct] = useState([]);
  const dispatch = useDispatch();
  const {data, loading, error} = useGet("https://parseapi.back4app.com/classes/products")

  useEffect(() => {
    const fetchProduct = async () => {
      if(data.length > 0){
        const result = data.find((data) => data.objectId === params.id);
        setProduct(result);
      }
    };

    fetchProduct();
  }, [data, params.id]);

  return (
    <div className="flex flex-col justify-center items-center md:max-w-[1024px] lg:max-w-[1200px] xl:max-w-[1600px] mx-auto px-3 mb-20 mt-14">
      <div className="flex flex-col xl:justify-center md:flex-row gap-5 w-full lg:h-[650px] px-2">
        <HeroProduct product={product} isLoading={loading} />
        <div className="flex md:w-5/12 xl:w-4/12 h-full flex-col gap-2">
          <DescriptionProduct product={product} />
          <ProductVariants product={product} />
          <button onClick={() => dispatch(addToCart({ id: product.objectId, qty: 1 }))} className="lg:h-[10%] h-10 w-full bg-zinc-900 justify-center items-center text-lg text-white font-semibold">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContainerDetail;
