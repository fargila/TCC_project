import { FaThList, FaShoppingCart, FaStar, FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='z-50 flex justify-end h-32 text-2xl rounded-b-3xl
    border-b-4 border-blue-300 ring-2 ring-black fixed w-full top-0 flex flex-col text-lg'>
      <div className="w-full flex justify-end bg-gray-700 h-1/3 text-gray-200 items-center
      pr-20">
        <button className="mr-10"><p>Logar</p></button>
        <button className="mr-10"><p>Minha conta</p></button>
        <button className="mr-10"><p>Minha conta</p></button>
        <button className="mr-10"><p>Ajuda</p></button>
      </div>
      <div className="rounded-b-3xl bg-white w-full h-2/3 flex justify-between px-20 items-center">
        <div className="flex h-1/2 w-1/2">
          <input className="w-3/4 border border-black rounded-l-xl" type="text" />
          <button className="flex items-center px-2 w-1/12 border border-black rounded-r-xl
          bg-gray-800 text-white justify-center"><FaSearch/></button>
        </div>
        <div className="flex items-center">
          <div className="flex flex-col items-center">
            <div><button className="flex items-center"><FaShoppingCart
            className="mr-2"/><p>Carrinho</p></button></div>
            <Link className=" bg-gray-800 text-white rounded-lg py-1 px-10" to="/purchase">
            Comprar</Link>
          </div>
          <div className="w-px bg-gray-400 mx-10 h-16"></div>
          <div className="">
            <Link to="/catalog" className="flex flex-col justify-center items-center">
              <FaStar className="border rounded-full border-black"/>
              <p>Lista de desejos</p>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
