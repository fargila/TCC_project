import React from 'react'
// import Item from '../components/Item'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

function Catalog() {
  return (
    <div className='h-auto flex justify-center flex-col my-40'>
     
      <div className='h-auto flex w-full'>
        <div className='border border-black bg-blue-100 w-2/12 flex flex-col rounded-r-xl'>
          <h1 className='text-4xl border-b-2 border-black font-bold pl-3'>Categorias</h1>
          <button className='text-2xl my-2 font-medium pl-3 flex justify-start'>Tudo</button>
          <button className='text-2xl mb-2 pl-3 flex justify-start'>Ficção literária</button>
          <button className='pl-7 mb-2 border-b border-black flex justify flex justify-start'>Infantil</button>
          <button className='pl-7 mb-2 border-b border-black flex justify-start'>Ficção científica</button>
          <button className='pl-7 mb-2 border-b border-black flex justify-start'>Fantasia</button>
          <button className='pl-7 mb-2 border-b border-black flex justify-start'>Mistério</button>
          <button className='pl-7 mb-2 border-b border-black flex justify-start'>Romance</button>
          <button className='pl-7 mb-2 border-b border-black flex justify-start'>Terror</button>
          <button className='pl-7 mb-2 border-b border-black flex justify-start'>Crime</button>
          <button className='pl-7 mb-2 border-b border-black flex justify-start'>HQs</button>
          <button className='text-2xl my-2 pl-3 flex justify-start'>Não ficção</button>
          <button className='pl-7 mb-2 border-b border-black flex justify-start'>Arte</button>
          <button className='pl-7 mb-2 border-b border-black flex justify-start'>Fotografia</button>
          <button className='pl-7 mb-2 border-b border-black flex justify-start'>Jurídico</button>
          <button className='pl-7 mb-2 border-b border-black flex justify-start'>História</button>
          <button className='pl-7 mb-2 border-b border-black flex justify-start'>Psicologia</button>
          <button className='pl-7 mb-2 border-b border-black flex justify-start'>Economia</button>
          <button className='text-2xl my-2 pl-3 flex justify-start'>Outros</button>
          <button className='pl-7 mb-2 border-b border-black flex justify-start'>Maternidade</button>
          <button className='pl-7 mb-2 border-b border-black flex justify-start'>Poesía</button>
          <button className='pl-7 mb-2 border-b border-black flex justify-start'>Sexo</button>
          <button className='pl-7 mb-2 border-b border-black flex justify-start'>Viagem</button>
          <button className='pl-7 mb-2 border-b border-black flex justify-start'>Esporte</button>
          <button className='pl-7 mb-2 border-b border-black flex justify-start'>Política</button>
        </div>

        <div className='ml-4 border border-black flex flex-col w-10/12 h-auto justify-center items-center'>
          <div className=' w-full h-14 grid grid-cols-9 '>
            <button className='h-full '>Programação</button>
            <button className='border-2 border-gray-400 h-full bg-gray-300'>Culinária</button>
            <button className='border-2 border-gray-400 h-full bg-gray-300'>Educação</button>
            <button className='border-2 border-gray-400 h-full bg-gray-300'>Ficção</button>
            <button className='border-2 border-gray-400 h-full bg-gray-300'>Saúde</button>
            <button className='border-2 border-gray-400 h-full bg-gray-300'>Matemática</button>
            <button className='border-2 border-gray-400 h-full bg-gray-300'>Medicina</button>
            <button className='border-2 border-gray-400 h-full bg-gray-300'>Referência</button>
            <button className='border-2 border-gray-400 h-full bg-gray-300'>Ciência</button>
          </div> 

          <div className='h-auto grid grid-cols-5 gap-10 pt-10'>
            <p className='bg-white border-black border w-48 h-80'>items</p>
            <p className='bg-white border-black border w-48 h-80'>items</p>
            <p className='bg-white border-black border w-48 h-80'>items</p>
            <p className='bg-white border-black border w-48 h-80'>items</p>
            <p className='bg-white border-black border w-48 h-80'>items</p>
            <p className='bg-white border-black border w-48 h-80'>items</p>
            <p className='bg-white border-black border w-48 h-80'>items</p>
            <p className='bg-white border-black border w-48 h-80'>items</p>
            <p className='bg-white border-black border w-48 h-80'>items</p>
            <p className='bg-white border-black border w-48 h-80'>items</p>
            <p className='bg-white border-black border w-48 h-80'>items</p>
            <p className='bg-white border-black border w-48 h-80'>items</p>
          </div>
          
          <div className='w-full flex justify-end mr-10 font-bold'>
            <div className='grid grid-cols-9 gap-2 mb-4'>
              <button className='border border-black p-3'><FaArrowLeft/></button>
              <button className='border border-black p-3'>1</button>
              <button className='border border-black p-3'>2</button>
              <button className='border border-black p-3'>3</button>
              <button className='border border-black p-3'>4</button>
              <button className='border border-black p-3'>...</button>
              <button className='border border-black p-3'>n</button>
              <button className='border border-black p-3'><FaArrowRight/></button>
            </div>
          </div>
        </div>
      </div>
      {/* <Item/> */}
    </div>
  )
}

export default Catalog
