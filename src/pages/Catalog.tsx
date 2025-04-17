import React from 'react'
// import Item from '../components/Item'
import { FaSearch } from "react-icons/fa";

function Catalog() {
  return (
    <div className='h-auto flex justify-center flex-col my-40'>
      <div className='border border-black bg-red-300 h-auto w-1/6'>
        <p>Dentro de casa - nossos produtos</p>
      </div>
      <div className='border border-black bg-green-300 h-auto flex w-full'>
        <div className='border border-black bg-red-400 w-1/6'><p>Categoria</p></div>
        <div className='flex flex-col'>
          <div>
            <p>Aplied filters:</p>
            <div className='flex'>
              <input type="text" name="" id="" />
              <button><FaSearch/></button>
            </div>
          </div>
          <div className='border border-black bg-purple-300 w-5/6 h-auto grid grid-cols-3 gap-10'>
            <p className='bg-white p-36 border-black border'>items</p>
            <p className='bg-white p-36 border-black border'>items</p>
            <p className='bg-white p-36 border-black border'>items</p>
            <p className='bg-white p-36 border-black border'>items</p>
            <p className='bg-white p-36 border-black border'>items</p>
            <p className='bg-white p-36 border-black border'>items</p>
          </div>
        </div>
      </div>
      {/* <Item/> */}
    </div>
  )
}

export default Catalog
