import { Link } from 'react-router-dom'
import CartIcon from '../Images/CartIcon.png'
import HeartUnfilled from "../Images/heartUnfilled.png"
import Logo from '../Images/Logo.png'
import SearchIcon from '../Images/SearchIcon.png'

const NavBar = () => {

  return (
    <nav className="flex h-[46px] p-11 md:h-[123px] w-full bg-mainBg justify-between items-center md:px-[100px] sticky top-0 ">
        <Link to="/"><img src={Logo} className='h-[40px] md:h-full' alt='logo' /></Link>
        <div className='w-[444px] h-[33px] md:flex gap-[10px] hidden'>
          <div className='bg-white hidden md:flex rounded-l-[20px] w-[305px]'>
            <img src={SearchIcon} className='w-[23px] h-[23px] ml-4 mt-[5px]' alt='Search icon'/>
            <input type='text' className='outline-none px-10px ml-10px text-[20px]' />
          </div>
          <button className='bg-btnGreen text-white rounded-r-[20px] w-[132px] hover:bg-green'>Search</button>           
        </div>
            
        <div className='flex justify-between gap-[50px]'>
          <Link to="/">
            <div className='cursor-pointer border border-mainBg p-3 hover:border hover:border-btnGreen '>
              <img className='w-[30px] h-[30px] mb-[10px]' src={HeartUnfilled} />
              <h3 className='font-normal'>Save</h3>
            </div>
          </Link>
          <Link to="/CartPage">
            <div className='cursor-pointer border border-mainBg p-3 hover:border hover:border-btnGreen '>
              <img className='w-[30px] h-[30px] mb-[10px]' src={CartIcon} />
              <h3 className='font-normal'>Cart</h3>
            </div>
          </Link>
        </div> 
    </nav>
  )
}

export default NavBar