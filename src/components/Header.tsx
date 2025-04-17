import { FaThList, FaShoppingCart, FaMoneyBillWave } from "react-icons/fa";

function Header() {
  return (
    <header className='z-50 flex justify-end p-4 text-2xl bg-yellow-300 rounded-b-3xl
    border-b-4 border-pink-600 ring-2 ring-black fixed w-full top-0'>
      <button className=' mx-2 px-4 py-2 relative bg-pink-600 text-white
      rounded-full border-t-4 border-l-4 border-yellow-900'><FaThList/></button>
      <button className=' mx-2 px-4 py-2 relative bg-pink-600 text-white
      rounded-full border-t-4 border-l-4 border-yellow-900'><FaShoppingCart/></button>
      <button className=' mx-2 px-4 py-2 relative bg-pink-600 text-white
      rounded-full border-t-4 border-l-4 border-yellow-900'><FaMoneyBillWave/></button>
    </header>
  )
}

export default Header
