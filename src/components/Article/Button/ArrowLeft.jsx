import ArrowCircleLeftSharpIcon from "@mui/icons-material/ArrowCircleLeftSharp";

const ArrowLeft = ({ onclick, group }) => {
  return (
    <div className={`hidden ${group}`}onClick={onclick}>
      <ArrowCircleLeftSharpIcon
        className={`absolute top-[80px] -left-4 md:top-[250px] md:left-0 mx-5 cursor-pointer opacity-50 hover:opacity-100`}
        fontSize="large"
      />
    </div>
  );
};

export default ArrowLeft;
