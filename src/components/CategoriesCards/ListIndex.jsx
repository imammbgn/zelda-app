import Cards from "./Cards"

const ListIndex = () => {
  const imgItem = [
    {
      url: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1552874869-5c39ec9288dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1612902456551-333ac5afa26e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80",
    },
  ];

  return (
    <>
    <div className="relative w-full">
    <div className="flex flex-col lg:flex-row h-full md:h-[560px] gap-10 md:gap-0 lg:max-w-[1240px] justify-center lg:justify-evenly items-center mx-auto mb-16">
    <Cards img={{ backgroundImage: `url(${imgItem[0].url})` }} text="ACCESSORIES"/>
    <Cards img={{ backgroundImage: `url(${imgItem[1].url})` }} text="WOMENS SET"/>
    <Cards img={{ backgroundImage: `url(${imgItem[2].url})` }} text="BAG'S"/>
    </div>
    <div className="hidden md:block w-full h-[75%] bg-zinc-900 absolute bottom-0 z-0"></div>
    </div>
    </>
  )
}

export default ListIndex