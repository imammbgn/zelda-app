
const BannerFooter = () => {
    const bannerImg = [
        { src: "/images/banner.jpg"},
    ]

    return (
    <div className="relative w-full h-auto lg:h-72 m-auto overflow-hidden">
        <div className="w-full h-full bg-cover bg-center" style={{backgroundImage : `url(${bannerImg[0].src})`}}></div>
        <button className="px-10 py-2 absolute bottom-28 right-28 bg-gold text-slate-100 text-lg">SHOP NOW</button>
    </div>
  )
}

export default BannerFooter