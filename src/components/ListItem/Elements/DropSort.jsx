import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { isSlider } from "../../../redux/actions/sliderSlice";

const DropSort = ({ show, dropRef }) => {
  const [slider, setSlider] = useState(50000);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(isSlider(slider));
  }, [slider]);

  return (
    <div
      ref={dropRef} className={`absolute -bottom-[16.5rem] bg-zinc-900 px-[16px] py-[20px] rounded-xl shadow-md shadow-zinc-600 z-10 text-zinc-50 transition-all ease-in-out duration-500 ${
        !show ? "scale-0" : "scale-100"
      }`}
    >
      <div className="flex flex-col space-y-5">
      <div className="flex gap-3">
      <label className="font-semibold" htmlFor="price">
          PRICE
        </label>
        <div className="flex flex-col gap-3">
          <input
            className="bg-white appearance-none rounded-full w-[150px] accent-black"
            type="range"
            value={slider}
            min="50000"
            max="2000000"
            step="50000"
            onChange={(e) => setSlider(parseFloat(e.target.value))}
          />
          <div className="inline-flex gap-1">
            <label htmlFor="number" className="font-medium">Rp &gt;</label>
            <input
              type="number"
              id="number"
              min="0"
              value={slider}
              onChange={(e) => setSlider(parseFloat(e.target.value))}
              className="text-md appearance-none outline-none font-medium w-8/12 bg-transparent"
            />
          </div>
        </div>
      </div>
          <div className="flex gap-2">
          <input type="checkbox" id="low" className="w-5 h-5 rounded-full"/>
          <label htmlFor="low" className="text-sm">RP 50000 - RP 150000</label>
          </div>
          <div className="flex gap-2">
          <input type="checkbox" id="mid" className="w-5 h-5 rounded-full"/>
          <label htmlFor="mid" className="text-sm">RP 100000 - RP 350000</label>
          </div>
          <div className="flex gap-2">
          <input type="checkbox" id="high" className="w-5 h-5 rounded-full"/>
          <label htmlFor="high" className="text-sm">RP 350000 - RP 1000000</label>
          </div>
          <div className="flex gap-2">
          <input type="checkbox" id="higher" className="w-5 h-5 rounded-full"/>
          <label htmlFor="higher" className="text-sm">RP &gt; 1000000</label>
          </div>
      </div>
    </div>
  );
};

export default DropSort;
