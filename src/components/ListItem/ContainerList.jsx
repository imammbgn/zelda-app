import OrderList from "./Elements/OrderList";
import Button from "./Elements/Button";
import DisplayItem from "./DisplayItem";
import data from "../../TemplateData.json";
import ListNav from "./Elements/ListNav";
import { useState, useEffect, useRef } from "react";
import ArrowCircleRightSharpIcon from "@mui/icons-material/ArrowCircleRightSharp";
import ArrowCircleLeftSharpIcon from "@mui/icons-material/ArrowCircleLeftSharp";

const ContainerList = ({ scroll }) => {
  const [filterTerm, setFilterTerm] = useState("");
  const [displayData, setDisplayData] = useState([]);
  const [show, setShow] = useState(false);
  const [isActive, setIsActive] = useState("");
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
    setIsActive(category);
    setFilterTerm(filteredData);
  };

  return (
    <section ref={scroll}>
      <div
        className="relative lg:max-w-[1240px] mx-auto my-10 mt-20 mb-16 flex flex-col justify-center"
        id="containerList"
      >
        <div className="hidden w-full lg:flex justify-between items-center mx-auto px-7">
          <OrderList active={isActive} onclick={filterData} />
          <Button />
        </div>

        <details className="lg:hidden absolute top-0 left-5 dropdown mb-32">
          <summary className="m-1 py-1 px-8 rounded-md justify-center items-center text-center bg-neutral-focus text-slate-100">
            Filter
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52 gap-2">
            <ListNav tab="false" onclick={() => filterData("")}>
              All Products
            </ListNav>
            <ListNav tab="false" onclick={() => filterData("accessories")}>
              Accesories
            </ListNav>
            <ListNav tab="false" onclick={() => filterData("bag")}>
              Bags
            </ListNav>
            <ListNav tab="false" onclick={() => filterData("watch")}>
              Watch
            </ListNav>
            <ListNav tab="false" onclick={() => filterData("clothing")}>
              Clothing
            </ListNav>
            <ListNav tab="false" onclick={() => filterData("dress")}>
              Dress Shirts
            </ListNav>
          </ul>
        </details>

        <div
          className={`w-full ${
            !show ? "overflow-x-scroll scroll" : ""
          } whitespace-nowrap scroll-smooth scrollbar-hide`}
          ref={sliderRef}
        >
          <div
            className={`w-full flex ${
              !show
                ? "flex-wrap lg:flex-nowrap gap-20 lg:gap-7"
                : "flex-wrap gap-20 lg:gap-0"
            } lg:justify-between justify-center items-center px-7 mt-16`}
          >
            <DisplayItem
              datas={filterTerm.length > 0 ? filterTerm : displayData}
            />
          </div>
          <div className={`${!show ? "hidden lg:block" : "hidden"}`}>
            <ArrowCircleRightSharpIcon
              className="absolute top-[220px] lg:-right-3 xl:-right-16 mx-5 cursor-pointer opacity-50 hover:opacity-100"
              fontSize="large"
              onClick={toRight}
            />
          </div>
          <div className={`${!show ? "hidden lg:block" : "hidden"}`}>
            <ArrowCircleLeftSharpIcon
              className="absolute top-[220px] lg:-left-3 xl:-left-16 mx-5 cursor-pointer opacity-50 hover:opacity-100"
              fontSize="large"
              onClick={toLeft}
            />
          </div>
        </div>
        <button
          className="hidden lg:block w-60 self-center px-7 py-3 mt-6 mb-3 bg-zinc-800 hover:bg-zinc-700 text-zinc-100 text-lg font-montserrat tracking-wide"
          onClick={showAllCategory}
        >
          LOAD MORE
        </button>
      </div>
    </section>
  );
};

export default ContainerList;
