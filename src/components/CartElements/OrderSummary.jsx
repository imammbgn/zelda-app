import { ToRupiah } from "../utils/RupiahConvert"

const OrderSummary = ({ total }) => {
  return (
    <div className="w-[450px] h-[350px]">
          <div className=" bg-zinc-200 px-10 py-10 flex flex-col">
            <div className="flex items-center w-full h-12 border-b-2 border-slate-700">
              <h1 className="text-2xl">Order Summary</h1>
            </div>
            <div className="h-40 w-full flex flex-col mt-2 gap-4 py-5 border-b-2 border-slate-700">
              <div className="flex w-full justify-between">
                <p>Subtotal</p>
                <p className="font-medium">Rp{" "}{ToRupiah(total)}</p>
              </div>
              <div className="flex w-full justify-between">
                <p>Shipping</p>
                <p className="font-medium">Free</p>
              </div>
              <p className="text-green-500 font-medium cursor-pointer mt-1 hover:font-bold duration-100">
                Add Coupon Code
              </p>
            </div>
            <div className="flex justify-between items-center w-full mt-4">
              <h1 className="text-2xl font-semibold">TOTAL</h1>
              <p className="text-2xl font-semibold">Rp{" "}{ToRupiah(total)}</p>
            </div>
          </div>
          <div className="w-[450px] h-[60px] bg-zinc-800 mt-4 flex items-center justify-center cursor-pointer">
            <h1 className="text-2xl text-slate-100 tracking-wider">CHECKOUT</h1>
          </div>
        </div>
  )
}

export default OrderSummary