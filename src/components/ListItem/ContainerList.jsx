import OrderList from "./Elements/OrderList";
import Button from "./Elements/Button";
import DisplayItem from "./DisplayItem";
import data from "../../TemplateData.json";
import { useState, useEffect, useRef } from "react";
import ArrowCircleRightSharpIcon from "@mui/icons-material/ArrowCircleRightSharp";
import ArrowCircleLeftSharpIcon from "@mui/icons-material/ArrowCircleLeftSharp";

const ContainerList = ({ scroll }) => {
  const [filterTerm, setFilterTerm] = useState("");
  const [displayData, setDisplayData] = useState([]);
  const [show, setShow] = useState(false);
  const [isActive, setIsActive] = useState("")
  const sliderRef = useRef(null);

  const toLeft = () => {
    sliderRef.current.scrollLeft = sliderRef.current.scrollLeft - 611;
  };
  const toRight = () => {
    sliderRef.current.scrollLeft = sliderRef.current.scrollLeft + 618;
  };

  const showAllCategory = () => {
    setShow(!show);
  };

  useEffect(() => {
    setDisplayData(data);
  }, []);

  const filterData = (category) => {
    const filteredData = data.filter((val) => {
      if (val.categories.toLowerCase().includes(category)) {
        return val;
      }
    });
    setIsActive(category)
    setFilterTerm(filteredData);
  };

  return (
    <div
      className="relative max-w-[1240px] mx-auto my-10 mt-20 mb-16 flex flex-col justify-center"
      id="containerList"
      ref={scroll}
    >
      <div className="w-full flex justify-between items-center mx-auto px-7">
        <OrderList active={isActive} onclick={filterData} />
        <Button />
      </div>
      <div
        className={`w-full ${
          !show ? "overflow-x-scroll scroll" : ""
        } whitespace-nowrap scroll-smooth scrollbar-hide`}
        ref={sliderRef}
      >
        <div
          className={`w-full flex ${
            !show ? "flex-row gap-7" : "flex-wrap gap-4"
          } justify-between items-center px-7 mt-16`}
        >
          <DisplayItem
            datas={filterTerm.length > 0 ? filterTerm : displayData}
          />
        </div>
        <div className={`${!show ? "" : "hidden"}`}>
          <ArrowCircleRightSharpIcon
            className="absolute top-[220px] -right-20 mx-5 cursor-pointer opacity-50 hover:opacity-100"
            fontSize="large"
            onClick={toRight}
          />
        </div>
        <div className={`${!show ? "" : "hidden"}`}>
          <ArrowCircleLeftSharpIcon
            className="absolute top-[220px] -left-20 mx-5 cursor-pointer opacity-50 hover:opacity-100"
            fontSize="large"
            onClick={toLeft}
          />
        </div>
      </div>
      <button
        className="w-60 self-center px-7 py-3 mt-6 mb-3 bg-zinc-800 hover:bg-zinc-700 text-zinc-100 text-lg font-montserrat tracking-wide"
        onClick={showAllCategory}
      >
        LOAD MORE
      </button>
    </div>
  );
};

export default ContainerList;
