import BoxCarIcon from "../../../public/svg/boxcar.svg";
import DollarIcon from "../../../public/svg/dollar.svg";
import CheckIcon from "../../../public/svg/check.svg";
import LockIcon from "../../../public/svg/lock.svg";
import TemplateCard from "./TemplateCard";

const Card = () => {
  return (
    <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-evenly gap-3 lg:gap-5 items-start lg:h-[300px] lg:max-w-[1112px] xl:max-w-[1240px] mx-auto lg:px-7 mb-24">
      <TemplateCard icon={BoxCarIcon} h1="Gratis Ongkir">
        Kami menghadirkan layanan gratis ongkos kirim untuk memudahkan Anda
        mendapatkan produk yang Anda inginkan tanpa biaya tambahan. Pesan
        sekarang juga dan rasakan kepuasan berbelanja bersama kami!
      </TemplateCard>
      <TemplateCard icon={DollarIcon} h1="Garansi Uang Kembali">
        Keamanan belanja Anda adalah prioritas kami! Kami memberikan jaminan
        uang kembali untuk setiap pembelian yang Anda lakukan. Jika Anda tidak
        sepenuhnya puas dengan produk kami.
      </TemplateCard>
      <TemplateCard icon={CheckIcon} h1="Keamanan Pembayaran">
        Lindungi informasi pribadi dan transaksi Anda dengan penuh kepercayaan.
        Nikmati pengalaman berbelanja yang nyaman dan bebas dari rasa khawatir
        dengan pembayaran yang aman bersama kami!
      </TemplateCard>
      <TemplateCard icon={LockIcon} h1="Keaslian 100% Dijamin">
        Kami menjamin bahwa setiap produk yang kami tawarkan adalah 100% asli.
        Dapatkan jaminan bahwa Anda membeli barang berkualitas tinggi dengan
        jaminan keaslian.
      </TemplateCard>
    </div>
  );
};

export default Card;
