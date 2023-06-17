import ArrowCircleRightSharpIcon from "@mui/icons-material/ArrowCircleRightSharp";

const ArrowRight = ({ onclick, group }) => {
  return (
    <div className={`hidden ${group} duration-700`}onClick={onclick}>
      <ArrowCircleRightSharpIcon
        className="absolute top-[400px] right-0 mx-5 cursor-pointer opacity-50 hover:opacity-100"
        fontSize="large"
      />
    </div>
  );
};

export default ArrowRight;
