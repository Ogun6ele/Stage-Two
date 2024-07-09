import Classic from "../classicData.js";
import Card from "./Card";

const ClassicalCardsContainer = () => {
  return (
    <div className=" px-[40px] pt-[50px] flex justify-center flex-col   bg-mainBg md:px-[100px] ">
      <h1 className="pb-[50px] text-left tracking-[0.5rem] leading-8">Classic Plain Collections</h1>
      <div className="flex flex-wrap gap-20 justify-center md:justify-between">
        {Classic.map(ClassicData => (
          <Card 
            key={ClassicData.id}
            cardData={ClassicData}
          />
        ))}
      </div>
      
    </div>
  );
}

export default ClassicalCardsContainer;
