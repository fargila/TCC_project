import React from 'react'
import { MdSecurity } from 'react-icons/md';
import { FaPlane, FaHeadset, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  return (
    <footer className='flex flex-col justify-center h-auto bottom-0 mb-4'>
      <div className='w-full bg-black text-white py-8 flex justify-between
      border-t-4 border-gray-700 ring-2 ring-black'>
        <div className='flex pl-10 text-xl items-center'><MdSecurity/><p className='
        pl-2 font-medium'>100% inseguro</p></div>
        <div className='flex  text-xl items-center'><FaPlane/><p className='
        pl-2 font-medium'>Shipando para lugar nenhum</p></div>
        <div className='flex pr-10 text-xl items-center'><FaHeadset/><p className='
        pl-2 font-medium'>Suporte incontrável</p></div>
      </div>
      <div className='flex mt-10 justify-between'>
        <div className='pl-8 text-xl flex flex-col'>
            <p className='font-bold mb-6'>Mídia Social</p>
            <div className='flex w-full flex-col'>
                <div className='flex py-2'>
                    <p className='mr-4'>Integrante 1</p>
                    <button className='border border-black rounded-full text-2xl mr-4 p-2 object-cover'><FaInstagram/></button>
                    <button className='border border-black rounded-full text-2xl p-2 object-cover'><FaLinkedinIn/> </button>
                </div>
                <div className='flex py-2'>
                    <p className='mr-4'>Integrante 2</p>
                    <button className='border border-black rounded-full text-2xl mr-4 p-2 object-cover'><FaInstagram/></button>
                    <button className='border border-black rounded-full text-2xl p-2 object-cover'><FaLinkedinIn/> </button>
                </div>
                <div className='flex py-2'>
                    <p className='mr-4'>Integrante 3</p>
                    <button className='border border-black rounded-full text-2xl mr-4 p-2 object-cover'><FaInstagram/></button>
                    <button className='border border-black rounded-full text-2xl p-2 object-cover'><FaLinkedinIn/> </button>
                </div>
            </div>
        </div>
        <div className=' text-xl'>
            <p className='font-bold mb-6'>Gitubs</p>
            <p className='py-2'>Integrante 1's Github account</p>
            <p className='py-2'>Integrante 2's Github account</p>
            <p className='py-2'>Integrante 3's Github account</p>
        </div>
        <div className=' text-xl'>
            <p className='font-bold mb-6'>Grupo</p>
            <p className='py-2'>About us</p>
            <p className='py-2'>About this project</p>
        </div>
        <div className='pr-8 text-xl'>
            <p className='font-bold mb-6'>Links Úteis</p>
            <p className='py-2'>Link 1</p>
            <p className='py-2'>Link 2</p>
            <p className='py-2'>Link 3</p>
            <p className='py-2'>Link 4</p>
            <p className='py-2'>Link 5</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
