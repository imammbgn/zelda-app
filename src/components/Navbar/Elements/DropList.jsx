
const DropList = ({ title, onclick }) => {
  return (
    <div className="px-1 py-2 hover:bg-zinc-200">
    <p
      className="text-zinc-900 text-sm px-2 cursor-pointer font-medium"
      onClick={onclick}
    >
      {title}
    </p>
  </div>
  )
}

export default DropList