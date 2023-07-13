const Input = ({
  variant,
  children,
  htmlFor,
  onchange,
  type,
  id,
  name,
  placeholder,
  value
}) => {
  const variantClasses = {
    formAuth: {
      inputStyle:
        "py-1 w-80 bg-transparent focus:ring-transparent focus:outline-none font-medium border-b-2 border-zinc-400",
      labelStyle: "font-light text-zinc-700 text-sm",
    },
    formPayment: {
      inputStyle:
        `bg-gray-50 border border-gray-400 text-gray-900 text-md outline-none rounded-lg bg-zinc-50 focus:ring-blue-500 ${value.length > 0 ? "focus:border-emerald-500" : "focus:border-red-500"} block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`,
      labelStyle: "text-zinc-800 text-lg font-medium",
    },
  };

  const className = variantClasses[variant];

  return (
    <>
      <label className={className.labelStyle} htmlFor={htmlFor}>
        {children}
      </label>
      <input
        className={className.inputStyle}
        type={type}
        id={id}
        name={name}
        onChange={onchange}
        placeholder={placeholder}
        value={value}
        required
      />
    </>
  );
};

export default Input;
