
const Footer = () => {
  return (
    <footer className=" flex flex-col  justify-center px-[50px] gap-10 md:flex-row md:justify-between md:px-[100px] py-[40px] w-full bg-footer">
        <div className="flex justify-center m-auto items-left flex-col">
            <h2>About Us</h2>
            <ul className='flex mt-3  flex-col gap-3'>
                <li><a className="hover:underline">Contact Us</a></li>
                <li><a className="hover:underline">Our Blog</a></li>
                <li><a className="hover:underline">Terms & Conditions</a></li>
            </ul>
        </div>
        <div className="flex justify-center m-auto items-left flex-col">
            <h2>Payment</h2>
            <ul className='flex  mt-3  flex-col gap-3'>
                <li><a className="hover:underline">Opay</a></li>
                <li><a className="hover:underline">MoniePoint</a></li>
                <li><a className="hover:underline">Kuda</a></li>
            </ul>
        </div>
        <div className="flex justify-center m-auto items-left flex-col">
            <h2>Info</h2>
            <ul className='flex  mt-3  flex-col gap-3'>
                <li><a className="hover:underline">FAQs</a></li>
                <li><a className="hover:underline">Delivery</a></li>
                <li><a className="hover:underline">Tracking Order</a></li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer