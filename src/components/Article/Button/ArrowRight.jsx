import ArrowRightIcon from "/public/svg/ArrowRightIcon.svg"

const ArrowRight = ({ variant, onclick, group, display }) => {
  const variantClasses = {
    onList: "top-[200px] lg:-right-3 xl:-right-16 opacity-50 hover:opacity-100",
    carousel: "top-[80px] -right-4 md:top-[250px] md:right-0 min-[300px]:max-sm:w-8 min-[300px]:max-sm:h-8"
  }

  const className = variantClasses[variant]

  return (
    <div className={`${display} ${group} duration-700`}onClick={onclick}>
      <img src={ArrowRightIcon} alt="rightIcon"
        className={`absolute mx-5 cursor-pointer ${className}`}
        fontSize="large"
      />
    </div>
  );
};

export default ArrowRight;
