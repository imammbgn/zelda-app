import ArrowCircleRightSharpIcon from "@mui/icons-material/ArrowCircleRightSharp";

const ArrowRight = ({ onclick, group }) => {
  return (
    <div className={`hidden ${group} duration-700`}onClick={onclick}>
      <ArrowCircleRightSharpIcon
        className="absolute top-[80px] -right-4 md:top-[250px] md:right-0 mx-5 cursor-pointer opacity-50 hover:opacity-100"
        fontSize="large"
      />
    </div>
  );
};

export default ArrowRight;
