
const ProductVariants = ({ product }) => {

  return (
    <>
      <div className="h-[20%] w-full flex-col gap-2 px-3 py-2 border-b-2 border-zinc-300">
        <div className="flex flex-row">
          <h1 className="w-2/12 px-1 text-md font-semibold">Color</h1>
          <div className="w-10/12 flex flex-col gap-4 px-1">
            <ul className="flex flex-row gap-4">
              {product?.colors?.map((color) => {
                return(
                  <li key={color}>
                  <div className={`w-8 h-8 rounded-full cursor-pointer`} style={{ backgroundColor: color }}></div>
                </li>
                )
              })}
            </ul>
            <p className="italic font-medium text-zinc-900 text-opacity-50">
            </p>
          </div>
        </div>
      </div>
      <div className="h-[20%] w-full flex-col gap-2 px-3 py-2 border-b-2 border-zinc-300">
        <div className="flex flex-row">
          <h1 className="w-2/12 px-1 text-md font-semibold">Size</h1>
          <div className="w-10/12 flex flex-col gap-4 px-1">
            <ul className="flex flex-row gap-4">
              {product?.size?.map((size) => {
                return (
                  <li key={size}>
                  <div className="w-8 h-8 rounded-full bg-zinc-900 text-white flex justify-center items-center text-center cursor-pointer">
                    {size}
                  </div>
                </li>
                )
              })}
            </ul>
            <p className="italic font-medium text-zinc-900 text-opacity-50">
              6'5 inch
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductVariants;
