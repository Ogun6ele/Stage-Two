import ExclusiveBag from "../Images/ExclusiveBag.png";
import ExclusiveBlackBag from "../Images/ExclusiveBlackBag.png";
import NudeBag from "../Images/ExclusiveNudeBag.png";
import HeartUnfilled from "../Images/heartUnfilled.png"
import { Link } from "react-router-dom";

const ExclusiveCardsContainer = () => {
  return (
    <div className=" px-[40px] py-[50px] flex justify-center  flex-col   bg-mainBg md:px-[100px] ">
    <h1 className="pb-[50px] text-left tracking-[0.5rem] leading-8 ">Exclusive Collections</h1>
      <div className="flex flex-wrap gap-20 justify-center lg:justify-between">
        <Link to="/ProductReview">
          <div className="md:w-[380px]  md:h-[656px] p-[10px] border-[3px] border-mainBg hover:border-btnGreen">
            <div className="mb-[10px] md:h-[401px]">
              <img src={ExclusiveBlackBag} alt={`Black Exclusive Tote Bag image`} className="w-full h-full object-cover rounded-t-lg" />
            </div>
            <div className="pb-[10px]">
              <h2 className="text-xl font-bold mb-[5px]">Black Exclusive Tote Bag</h2>
              <p className="">Description: 100% Organic cotton material</p>
              <p className="">Available colours: Black and Navy</p>
              <p className="">Price:<span> #4000</span></p>
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
        <Link to="/ProductReview">
          <div className="md:w-[380px]  md:h-[656px] p-[10px] border-[3px] border-mainBg hover:border-btnGreen">
            <div className="mb-[10px] md:h-[401px]">
              <img src={ExclusiveBag} alt={`Exclusive Tote Bag image`} className="w-full h-full object-cover rounded-t-lg" />
            </div>
            <div className="pb-[10px]">
              <h2 className="text-xl font-bold mb-[5px]">Exclusive Tote Bag</h2>
              <p className="">Description: 100% Organic cotton material</p>
              <p className="">Available colours: White and Black</p>
              <p className="">Price:<span> #4000</span></p>
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
        <Link to="/ProductReview">
          <div className="md:w-[380px]  md:h-[656px] p-[10px] border-[3px] border-mainBg hover:border-btnGreen">
            <div className="mb-[10px] md:h-[401px]">
              <img src={NudeBag} alt={`Exclusive woven Tote Bag`} className="w-full h-full object-cover rounded-t-lg" />
            </div>
            <div className="pb-[10px]">
              <h2 className="text-xl font-bold mb-[5px]">Exclusive woven Tote Bag</h2>
              <p className="">Description: 100% Organic cotton material</p>
              <p className="">Available colours: Green and White</p>
              <p className="">Price:<span> #4000</span></p>
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
      </div>
      
    </div>
  );
}

export default ExclusiveCardsContainer;

