import Exclusive from "../ExclusiveData.js";
import Card from "./Card";

const ExclusiveCardsContainer = () => {
  return (
    <div className=" px-[40px] py-[50px] flex justify-center  flex-col   bg-mainBg md:px-[100px] ">
    <h1 className="pb-[50px] text-left tracking-[0.5rem] leading-8 ">Exclusive Collections</h1>
      <div className="flex flex-wrap gap-20 justify-center lg:justify-between">
        {Exclusive.map(ExclusiveData => (
          <Card 
            key={ExclusiveData.id}
            cardData={ExclusiveData}
          />
        ))}
      </div>
      
    </div>
  );
}

export default ExclusiveCardsContainer;

