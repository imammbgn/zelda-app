import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import TemplateCard from "./TemplateCard";

const Card = () => {
  return (
    <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-evenly gap-3 lg:gap-5 items-start lg:h-[300px] lg:max-w-[1240px] mx-auto lg:px-7 mb-16">
      <TemplateCard
        icon={<LocalShippingOutlinedIcon fontSize="large" />}
        h1="Free Delivery"
      >
        We present a free shipping service to make it easier for you to get the
        product you want at no extra cost. Order now and feel the ease and
        satisfaction of shopping with us!
      </TemplateCard>
      <TemplateCard
        icon={<PaidOutlinedIcon fontSize="large" />}
        h1="Money Back Guaranteed"
      >
        Your shopping security is our priority! We provide a money back
        guarantee for every purchase you make. If you are not completely
        satisfied with our product.
      </TemplateCard>
      <TemplateCard
        icon={<LockOutlinedIcon fontSize="large" />}
        h1="Secure Payment"
      >
        Protect your personal information and transactions with complete trust.
        Enjoy a comfortable and worry-free shopping experience with secure
        payments with us!
      </TemplateCard>
      <TemplateCard
        icon={<CheckCircleOutlineOutlinedIcon fontSize="large" />}
        h1="Authenticity 100% Guaranteed"
      >
        We guarantee that every product we offer is 100% authentic. Get the
        assurance that you are buying high-quality goods with guaranteed
        authenticity.
      </TemplateCard>
    </div>
  );
};

export default Card;
