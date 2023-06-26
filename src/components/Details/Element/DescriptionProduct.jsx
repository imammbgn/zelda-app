import { ToRupiah } from "../../utils/RupiahConvert";

const DescriptionProduct = ({ product }) => {

  return (
    <div className="h-[40%] w-full border-b-2 border-zinc-300 flex flex-col px-3 py-2">
    <h1 className="text-2xl font-semibold mb-1">{product.name}</h1>
    <h2 className="text-xl font-medium mb-5">Rp{" "} {product?.price && ToRupiah(product.price)}</h2>
    <p className="text-left text-sm">
      {product.description}
    </p>
    <p className="text-sm font-semibold mt-5">Gratis Ongkir.</p>
  </div>
  )
}

export default DescriptionProduct