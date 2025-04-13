import React, { useState } from 'react'
import { innerBrazil } from '../types/ufs'
import { FaPix } from "react-icons/fa6"
import { FaCreditCard, FaMoneyBillAlt } from "react-icons/fa"

const Purchase = () => {

    const [ufs, setUfs] = useState('')
    return (
        <div className='h-auto flex justify-center'>
            <form  className='h-screen w-3/5 items-center' action="">
                <div className='grid grid-cols-6 gap-2 p-4 bg-gray-300 h-3/6 my-6 rounded-xl 
                border-b-4 border-gray-500 ring-1 ring-black'>
                    <input className='h-10 rounded-3xl pl-2 col-span-5 border-2 border-gray-600' 
                    type="text" placeholder='CEP'/>
                    <input className='h-10 rounded-3xl pl-2 col-span-4 border-2 border-gray-600' 
                    type="text" placeholder='Endereço'/>
                    <input className='h-10 rounded-3xl pl-2 col-span-1 border-2 border-gray-600' 
                    type="number" placeholder='Número do end.'/>
                    <input className='h-10 rounded-3xl pl-2 border-2 border-gray-600' 
                    type="text" placeholder='Complemento'/>
                    <input className='h-10 rounded-3xl pl-2 col-span-2 border-2 border-gray-600' 
                    type="text" placeholder='Bairro'/>
                    <input className='h-10 rounded-3xl pl-2 col-span-2 border-2 border-gray-600' 
                    type="text" placeholder='Cidade'/>
                    <select className='h-10 rounded-3xl pl-2 border-2 border-gray-600' 
                    name="" id="" value={ufs} onChange={(e) => setUfs(e.target.value)}>{
                        innerBrazil.map((uf) => (
                            <option key={uf.sigla} value={uf.sigla}>{uf.sigla}</option>
                        ))    
                    }</select>
                </div>
                <div className='h-48 ring-1 ring-black rounded-t-xl'>
                    <div className='z-10 flex bg-gray-400 justify-center h-3/5 rounded-t-xl items-center shadow-2xl relative'>
                        <button className='px-2 m-2 border rounded-2xl h-14 w-3/12
                        flex justify-center items-center'><FaCreditCard className='flex justify-center max-h-full w-1/4'/>Cartão de crédito</button>
                        <button className='px-2 m-2 border rounded-2xl h-14 w-3/12
                        flex justify-center items-center'><FaMoneyBillAlt className='flex justify-center max-h-full w-1/4'/>Cartão de débito</button>
                        <button className='px-2 m-2 border rounded-2xl h-14 w-2/12
                        flex justify-center items-center'><FaPix className='flex justify-center max-h-full w-1/4'/>PIX</button>
                    </div>
                    <div className='z-0 flex bg-gray-500 justify-center h-2/5  border-b-4 border-gray-700 text-2xl font-semibold'>
                        <button className='w-full h-auto' type='submit'>Finalizar compra</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Purchase
