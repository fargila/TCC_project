import React from 'react'

function Header() {
  return (
    <header className='flex justify-center p-4 text-2xl bg-yellow-400'>
      <button className=' bg-white mx-2 px-4 py-2'>Carrinho</button>
      <button className=' bg-white mx-2 px-4 py-2'>Catálogo</button>
    </header>
  )
}

export default Header
