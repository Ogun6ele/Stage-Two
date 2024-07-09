import BlackBag from '../Images/BlackBag.png'
import SaveIcon from '../Images/SaveIcon.png'
import StarFilledIcon from '../Images/StarFilledIcon.png'
import StarIcon from '../Images/starIcon.png'
import CartWhiteIcon from '../Images/CartWhiteIcon.png'

const ProductView = () => {
  return (
    <div className=" p-[50px] flex gap-11 flex-col md:flex-row md:gap-[20px] justify-between items-center bg-green md:px-[200px]">
        <div className='h-[215px] w-[266px] md:h-[650px] md:w-[560px] '>
          <img className="w-full" src={BlackBag}/>
        </div>
        <div className='flex flex-col gap-5'>
            <div className='hidden justify-end md:px-[50] lg:flex'>
              <img src={SaveIcon}/>
            </div>
            <h3 className='hidden md:block'>100% Organic Cotton Material</h3>
            <p>Black Colour, <br /> With a reinforced patterned shoulder <br /> straps for comfortable carrying.</p>
            
            <h2>#4000</h2>
            <p>Verified Reviews</p>
            <div className='flex gap-[10px]'>
              <img src={StarFilledIcon} />
              <img src={StarFilledIcon} />
              <img src={StarFilledIcon} />
              <img src={StarFilledIcon} />
              <img src={StarIcon} />
            </div>
            <div>
              <button className=' flex justify-center items-center w-[400px] mb-4 py-[30px] h-[40px] bg-btnGreen  rounded-xl text-white font-extrabold'><img src={CartWhiteIcon} className='h-[25px] w-[25px] mr-[15px]' /> Add to Cart</button>
              <div className=' flex justify-between items-center w-[400px] py-[30px] h-[40px] rounded-xl overflow-hidden'>
                <button className='flex justify-center items-center w-[15%] mb-4 py-[30px] h-[40px] bg-white rounded-s-xl text-btnGreen font-extrabold'> + </button>
                <div className=' flex justify-center items-center w-[65%] mb-4 py-[30px] h-[40px] bg-white text-btnGreen font-extrabold'><h2>1</h2></div>
                <button className='flex justify-center items-center w-[15%]  mb-4 py-[30px] h-[40px] bg-white rounded-e-xl text-btnGreen font-extrabold'>-</button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default ProductView