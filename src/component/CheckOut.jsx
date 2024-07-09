import CheckOutImgMobile from "../Images/CheckOutImgPhone.png"
import CheckOutImgLaptop from "../Images/CheckOutImgLaptop.png"

const CheckOut = () => {
  return (
    <div className="flex flex-col  justify-center gap-[50px] px-[25px] m-auto py-[50px] md:px-[100px]  bg-footer w-full overflow-hidden text-white md:flex-row">
        <div className=" w-[400px] h-[300px] md:w-[400px] md:h-[140px] object-cover ">
            <img className=" block md:hidden" src={CheckOutImgMobile} />
            <img className="hidden md:block" src={CheckOutImgLaptop} />

        </div>
        <div className="flex flex-col items-left text-left justify-left my-auto gap-[40px]">
            <h4 className="text-[35px]">Thank You for Your Purchase! </h4>
            <h4 className="text-[35px]">Your tote bag is on its way! <br /> Get ready to enjoy style, <br /> durability, and sustainability <br /> with your new  tote.</h4>
            <h4 className="text-[35px]">Share your style with us! <br /> Tag <a href="http://www.instagram.com">@Tote_Vibezz</a> on Instagram to be <br /> featured.</h4>
            <h4 className="text-[35px]">Happy Carrying!</h4>
            <h2 className="font-muellerhoff text-[60px]">– Tote Vibe .</h2>
        </div>
    </div>
  )
}

export default CheckOut