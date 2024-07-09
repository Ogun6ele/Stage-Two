/* eslint-disable react/prop-types */
import { Link  } from "react-router-dom";
import HeartUnfilled from "../Images/heartUnfilled.png"

const Card = ({ cardData }) => {
  const { Name, ImgSrc, Description, AvailableColours, Price } = cardData;

  return (
    <Link to="/ProductReview">
    <div className="md:w-[380px]  md:h-[656px] p-[10px] border-[3px] border-mainBg hover:border-btnGreen">
      <div className="mb-[10px] md:h-[401px]">
        <img src={`${ImgSrc}`} alt={`${Name} image`} className="w-full h-full object-cover rounded-t-lg" />
      </div>
      <div className="pb-[10px]">
        <h2 className="text-xl font-bold mb-[5px]">{Name}</h2>
        <p className="">Description: {Description}</p>
        <p className="">Available colours: {AvailableColours}</p>
        <p className="">Price:<span> #{Price}</span></p>
        <p className="">Ideal for school and casual outing.</p>
      </div>
      <div className="flex flex-row justify-between">
        <button className="rounded-[10px] bg-btnGreen p-[10px] text-white hover:bg-green">
          Add to Cart
        </button>
        <img className="mr-[50px] w-8 h-8" src={HeartUnfilled} />
      </div>
    </div>
    </Link>
  );
};

export default Card;

