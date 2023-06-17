import { ToRupiah } from "../utils/RupiahConvert";
import DisplayDetail from "./Elements/DisplayDetail";

const DisplayItem = ({ datas }) => {
  return (
    <>
      {datas &&
        datas.map((data) => {
          return (
            <div className="flex flex-col items-center" key={data.id}>
              <div className="relative w-[280px] h-[300px] mb-5 shadow-xl shadow-gray-200 overflow-hidden cursor-pointer">
                <div
                  className="w-full h-full bg-center bg-cover scale-110"
                  style={{
                    backgroundImage: `url(${data.img})`,
                  }}
                ></div>
              </div>
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
