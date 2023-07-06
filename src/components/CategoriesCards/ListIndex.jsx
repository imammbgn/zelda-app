import Cards from "./Cards";
import Shoes from "/images/shoes.jpg"

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
    {
      url: `${Shoes}`
    }
  ];

  return (
    <>
      <div className="grid grid-flow-row lg:grid-flow-col gap-4 justify-center h-full lg:max-w-[1024px] items-center mx-auto mb-24">
        <Cards
          img={{ backgroundImage: `url(${imgItem[1].url})` }}
          text="WOMENS SET"
          height="w-[330px] h-[475px] lg:w-[300px] lg:h-[445px] xl:w-[347px] xl:h-[495px]"
          pos="bg-bottom"
        />
        <div className="grid grid-rows-2 h-full items-center gap-3">
          <Cards
            img={{ backgroundImage: `url(${imgItem[0].url})` }}
            text="ACCESSORIES"
            height="w-[330px] h-[240px] xl:h-[240px] lg:w-[350px] lg:h-[215px]"
            pos="bg-center"
          />
          <Cards
            img={{ backgroundImage: `url(${imgItem[3].url})` }}
            text="SHOES"
            height="w-[330px] h-[240px] xl:h-[240px] lg:w-[350px] lg:h-[215px]"
            pos="bg-bottom"
          />
        </div>
        <Cards
          img={{ backgroundImage: `url(${imgItem[2].url})` }}
          text="BAG'S"
          height="w-[330px] h-[475px] lg:w-[300px] lg:h-[445px] xl:w-[347px] xl:h-[495px]"
          pos="bg-bottom"
        />
      </div>
    </>
  );
};

export default ListIndex;
