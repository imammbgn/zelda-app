import { useState, useEffect } from "react";
import { ToRupiah } from "../utils/RupiahConvert";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../redux/actions/cartSlice";
import { Link } from "react-router-dom";
import useGet from "../../config/api";

const TableCart = ({ totalState }) => {
  const cart = useSelector((state) => state.cart.data);
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState([]);
  const dispatch = useDispatch();

  const {data, loading, error} = useGet("https://ill-pink-bison-sari.cyclic.app/products")

  useEffect(() => {
    const renderProducts = () => {
      if (data.length > 0) {
        const updatedProducts = cart.map((item) => {
          const updateProduct = data.find((data) => data.id === item.id);
          if (updateProduct) {
            return {
              ...updateProduct,
              qty: item.qty,
              total: item.qty * updateProduct.price,
            };
          }
        });
        setProducts(updatedProducts);
      }
    };

    renderProducts();
  }, [cart, data, setProducts]);

  const handleCount = (id, value) => {
    const updatedProducts = products.map((item) => {
      if (item.id === id) {
        const updatedQty = item.qty + value;
        const newQty = updatedQty >= 0 ? updatedQty : 0;
        const updatedTotal = item.price * newQty;
        console.log(newQty);
        if (newQty === 0) {
          dispatch(removeFromCart(id));
          return null;
        } else {
          return { ...item, qty: newQty, total: updatedTotal };
        }
      }
      return item;
    });
    const filteredProducts = updatedProducts.filter((item) => item !== null);
    setProducts(filteredProducts);
  };

  useEffect(() => {
    const totalPrice = products
      .map((item) => item.total)
      .reduce((acc, cur) => acc + cur, 0);
    setTotal(totalPrice);
    totalState(totalPrice);
  }, [products]);

  return (
    <table className="flex flex-col w-full h-fit md:h-[500px]">
      <thead>
        <tr className="flex flex-row">
          <th className="basis-1/2 text-start">Product</th>
          <th className="hidden md:block basis-1/4">Price</th>
          <th className="basis-1/4">Quantity</th>
          <th className="basis-1/4">Total</th>
        </tr>
      </thead>
      {cart.length === 0 ? (
        <tbody>
          <tr className="flex justify-center items-center">
            <td>
              <div className="flex justify-center items-center h-[180px] mx-auto">
                <h1 className="text-6xl font-thin text-slate-950 text-opacity-20 mr-24">
                  Your Cart Is Empty
                </h1>
              </div>
            </td>
          </tr>
        </tbody>
      ) : (
        products.map((product) => {
          return (
            <tbody
              className="my-5 py-5 border-y-2 border-slate-300"
              key={product.id}
            >
              <tr className="h-[120px] flex flex-row items-center">
                <td className="basis-1/2 flex flex-row items-center">
                  <Link to={`/product/${product.id}`}>
                    <div className="md:h-[120px] md:w-[90px] w-[70px] h-[90px] bg-slate-100">
                      <div
                        className="w-full h-full bg-center bg-cover"
                        style={{ backgroundImage: `url(${product.image})` }}
                      ></div>
                    </div>
                  </Link>
                  <h1 className="ml-6 text-xl font-medium">
                    <Link to={`/product/${product.id}`}>{product.name}</Link>
                  </h1>
                </td>
                <td className="hidden lg:block basis-1/4 text-center font-medium">
                  Rp {ToRupiah(product.price)}
                </td>
                <td className="basis-1/4 justify-center flex">
                  <div className="w-[65px] h-6 md:w-[100px] md:h-8 rounded-full bg-slate-100 flex justify-between items-center px-2">
                    <button onClick={() => handleCount(product.id, -1)}>
                      -
                    </button>
                    <p className="font-medium">{product.qty}</p>
                    <button onClick={() => handleCount(product.id, 1)}>
                      +
                    </button>
                  </div>
                </td>
                <td className="basis-1/4 text-center font-medium text-xs md:text-lg">
                  Rp {ToRupiah(product.total)}
                </td>
              </tr>
            </tbody>
          );
        })
      )}
    </table>
  );
};

export default TableCart;
