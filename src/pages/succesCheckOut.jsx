import Navbar from "../components/Navbar/Navbar";
import CheckIcon from "../../public/svg/check.svg";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SuccesPayment = () => {
  const [second, setSecond] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setSecond((prevSecond) => prevSecond - 1);
    }, 1000);

    const timeout = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-2 justify-center items-center mt-32 lg:mt-52">
        <img src={CheckIcon} className="w-20 h-20 mb-5" alt="checkicon" />
        <h2 className="text-3xl text-center">Pembayaran Berhasil!</h2>
        <p className="text-xl mb-6 text-center">
          Terima kasih atas pembayaran Anda.
        </p>
        <p className="text-sm text-center italic font-semibold text-sky-600">
          Dalam {second} detik kembali kehalaman home...
        </p>
      </div>
    </>
  );
};

export default SuccesPayment;
