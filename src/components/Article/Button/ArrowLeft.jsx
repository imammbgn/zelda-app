import ArrowLeftIcon from "/public/svg/arrowLeftIcon.svg"

const ArrowLeft = ({ variant, onclick, group, display }) => {
  const variantClasses = {
    onList: " top-[200px] lg:-left-3 xl:-left-16 opacity-50 hover:opacity-100",
    carousel: "top-[80px] -left-4 md:top-[250px] md:left-0 min-[300px]:max-sm:w-8 min-[300px]:max-sm:h-8"
  }

  const className = variantClasses[variant]

  return (
    <div className={`${display} ${group}`}onClick={onclick}>
      <img src={ArrowLeftIcon} alt="leftIcon"
        className={`absolute mx-5 cursor-pointer ${className}`}
        fontSize="large"
      />
    </div>
  );
};

export default ArrowLeft;
