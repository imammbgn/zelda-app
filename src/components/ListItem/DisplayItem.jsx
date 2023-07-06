import { Link } from "react-router-dom";
import { ToRupiah } from "../utils/RupiahConvert";
import DisplayDetail from "./Elements/DisplayDetail";

const DisplayItem = ({ datas }) => {
  return (
    <>
      {datas &&
        datas.map((data) => {
          return (
            <div
              className="flex flex-col w-4/12 lg:w-3/12 items-center"
              key={data.id}
            >
              <Link to={`/product/${data.id}`} preventScrollReset={true}>
                <div className="flex justify-center relative w-[180px] h-[200px] lg:w-[248px] lg:h-[248px] mb-5 shadow-xl shadow-gray-200 overflow-hidden cursor-pointer">
                  <div
                    className="w-full h-full bg-center bg-cover scale-110"
                    style={{
                      backgroundImage: `url(${data.image})`,
                    }}
                  ></div>
                </div>
              </Link>
              <DisplayDetail
                name={data.name}
                price={`Rp ${ToRupiah(data.price)}`}
                id={data.id}
              />
            </div>
          );
        })}
    </>
  );
};

export default DisplayItem;
