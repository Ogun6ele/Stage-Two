import heartUnfilled from "../Images/heartUnfilled.png"
import DeleteIcon from "../Images/DeleteIcon.png"
import BlackBag from "../Images/BlackBag.png"
import CheckOut from "../Images/check-out.png"
import { Link } from "react-router-dom"

const InCart = () => {
  return (
    <div className=" flex flex-col items-center justify-center bg-green pb-[50px] w-full">
      <div>
        <div className="px-[50px] xl:px-[200px] lg:pt-[100px] mb-10">
          <h1 className="mb-[60px] ">Products In Cart</h1>
          <div className="flex justify-between ">
              <div>
                  <h2>Total</h2>
                  <p>Item(s)</p>
              </div>
              <div>
                  <h2>#4000</h2>
                  <p>One(1)</p>
              </div>
          </div>
        </div>
        <hr className="hidden lg:block w-[100%] my-[50px]"/>
        <div className="px-[50px] lg:px-[200px] pb-[50px] flex flex-col gap-12 lg:flex-row justify-between">
          <div className="flex gap-[20px] justify-between flex-col items-center lg:flex-row">
            <img className="h-[338px] w-[358px]" src={BlackBag}/>
            <div className="flex flex-col justify-between h-full pt-10 gap-10">
              <div >
                <h2>Classic Plain Tote Bag</h2>
                <p>Description: 100% Organic cotton <br /> material </p>
                <p>Price: <h2 className="text-black inline md:text-span ">#4000</h2></p>
              </div>
              <div>
                <div className="flex gap-10">
                  <div className="flex flex-col items-center justify-center">
                    <img className="w-[43px] h-[43px]" src={DeleteIcon} />
                    <h3>Remove Item</h3>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <img className="w-[43px] h-[43px]" src={heartUnfilled}/>
                    <h3 className="">Saved for Later</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-[25px] bg-deliveryBg rounded-sm ">
              <h2 className="text-center pb-[20px]">Delivery Information</h2>
              <hr className="p-0 m-0"/>
              <div>
                <h2>Location</h2>
                <p>46, John Olugbo Street, Ikeja, Lagos <br /> State.</p>
              </div>
              <div>
                <h2>Delivery Type</h2>
                <p>Home Delivery</p>
              </div>
              <div>
                <h2>Expectation Date</h2>
                <p>10th July to 11 July, 2024</p>
              </div>
          </div>
        </div>
      </div>
      <Link to='/CheckOutPage'>
      <button className=' flex justify-center items-center w-[400px] mb-4 py-[30px] h-[40px] bg-white  rounded-xl text-btnGreen font-extrabold'><img src={CheckOut} className='h-[25px] w-[25px] mr-[15px]' />Check Out</button></Link>
    </div>
  )
}

export default InCart