
const Input = ({ children, htmlFor, onchange, type, id }) => {
  return (
    <div className="flex flex-col gap-1 mt-7">
            <label
              className="font-light text-zinc-700 text-sm"
              htmlFor={htmlFor}
            >
              {children}
            </label>
              <input
                className="py-1 w-80 bg-transparent focus:ring-transparent focus:outline-none font-medium border-b-2 border-zinc-400 "
                type={type}
                id={id}
                onChange={onchange}
              />
          </div>
  )
}

export default Input