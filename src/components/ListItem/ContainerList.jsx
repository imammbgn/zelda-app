import OrderList from "./Elements/OrderList";
import Button from "./Elements/Button";
import DisplayItem from "./DisplayItem";
import ListNav from "./Elements/ListNav";
import { useState, useEffect, useRef } from "react";
import useGet from "../../config/api";
import ArrowRight from "../Article/Button/ArrowRight";
import ArrowLeft from "../Article/Button/ArrowLeft";
import { useSelector } from "react-redux";
import useOutDropdown from "../utils/useOutDropdown";

const ContainerList = ({ scroll }) => {
  const [show, setShow] = useState(false);
  const [drop, setDrop] = useState(false);
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState("bag");
  const scrollRef = useRef(null);
  const [selectedOptions, setSelectedOptions] = useState("")
  const [filterTerm, setFilterTerm] = useState([]);
  const { data, loading, error } = useGet(
    "https://parseapi.back4app.com/classes/products"
  );

  const toLeft = () => {
    scrollRef.current.scrollLeft = scrollRef.current.scrollLeft - 575;
  };
  const toRight = () => {
    scrollRef.current.scrollLeft = scrollRef.current.scrollLeft + 560;
  };

  useEffect(() => {
    const filteredData = data.filter((val) => {
      if(val.categories.toLowerCase().includes("bag")){
        return val
      }
    })
    setFilterTerm(filteredData)
  }, [data]);

  const slider = useSelector((state) => state.slider.range);

  useEffect(() => {
    const filteredData = () => {
      if(selectedOptions.length > 0){
        let filterData = []
        switch (selectedOptions){
          case "low":
            filterData = data.filter(val => val.price >= 50000 && val.price <= 150000)
            break
          case "mid":
            filterData = data.filter(val => val.price >= 150000 && val.price <= 350000)
            break
          case "high": 
          filterData = data.filter(val => val.price >= 350000 && val.price <= 1000000)
            break
          case "higher":
            filterData = data.filter(val => val.price >= 1000000)
            break
        }
        return filterData
      }
      else{
        return data.filter(val => val.price >= slider)
      }
    }

    const result = filteredData()
    setFilterTerm(result);
  }, [slider, selectedOptions]);

  const filterData = (category) => {
    const filteredData = data.filter((val) => {
      if (val.categories.toLowerCase().includes(category)) {
        return val;
      }
    });
    setIsActive(category);
    setFilterTerm(filteredData);
  };

  useOutDropdown(dropdownRef, setDrop);

  return (
    <section ref={scroll}>
      <div
        className="relative lg:max-w-[1112px] mx-auto my-10 mt-20 mb-16 flex flex-wrap justify-center"
        id="containerList"
      >
        <div className="ml-28 lg:ml-0 w-[70%] lg:w-full lg:flex justify-between items-center mx-auto px-7">
          <OrderList active={isActive} onclick={filterData} />
          <Button
            onclick={() => setDrop(!drop)}
            show={drop}
            dropRef={dropdownRef}
            stateOption={selectedOptions}
            setStateOption={setSelectedOptions}
          />
        </div>

        <details className="lg:hidden absolute top-0 left-5 dropdown mb-32">
          <summary className="flex w-[98px] list-none h-8 bg-zinc-900 rounded-full justify-center items-center text-center text-slate-50 text-xs font-medium">
            FILTER
          </summary>
          <ul className="px-[16px] py-[20px] mt-3 menu dropdown-content z-[1] bg-zinc-900 rounded-box w-52 gap-2 shadow-md shadow-zinc-600">
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
          ref={scrollRef}
        >
          <div
            className={`w-full flex ${
              !show
                ? "flex-wrap lg:flex-nowrap gap-20 lg:gap-7"
                : "flex-wrap gap-20 lg:gap-0"
            } lg:justify-between justify-center items-center px-7 mt-16`}
          >
            <DisplayItem datas={filterTerm} />
          </div>
          <div className={`${!show ? "hidden lg:block" : "hidden"}`}>
            <ArrowRight onclick={toRight} variant="onList" display="block" />
          </div>
          <div className={`${!show ? "hidden lg:block" : "hidden"}`}>
            <ArrowLeft onclick={toLeft} variant="onList" display="block" />
          </div>
        </div>
        <button
          className={`hidden ${show === true ? "lg:hidden" : "lg:block"} w-80 self-center px-7 py-3 mt-6 mb-3 bg-zinc-900 hover:bg-zinc-700 text-zinc-100 text-lg font-montserrat tracking-wide`}
          onClick={() => setShow(!show)}
        >
          LOAD MORE
        </button>
      </div>
    </section>
  );
};

export default ContainerList;
