import { MdSecurity } from 'react-icons/md';
import { FaPlane, FaHeadset, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  return (
    <footer className='flex flex-col justify-center h-auto bottom-0 mb-4'>
      <div className='w-full bg-gray-700 text-white py-8 flex justify-between
      border-t-4 border-blue-800 ring-2 ring-black'>
        <div className='flex pl-10 text-xl items-center'><MdSecurity/><p className='
        pl-2 font-medium'>100% <i>seguro</i></p></div>
        <div className='flex  text-xl items-center'><FaPlane/><p className='
        pl-2 font-medium'>Para qualquer lugar nacionalmente</p></div>
        <div className='flex pr-10 text-xl items-center'><FaHeadset/><p className='
        pl-2 font-medium'>Suporte automatizado por IA</p></div>
      </div>
      <div className='flex mt-10 justify-between'>
        <div className='pl-8 text-xl flex flex-col'>
            <p className='font-bold mb-6'>Social Media</p>
            <div className='flex w-full flex-col'>
                <div className='flex py-2'>
                    <button className='border border-black rounded-full text-2xl mr-4 p-2 object-cover'><FaInstagram/></button>
                    <button className='border border-black rounded-full text-2xl p-2 object-cover'><FaLinkedinIn/> </button>
                </div>
            </div>
        </div>
        <div className=' text-xl'>
            <p className='font-bold mb-6'>Team members</p>
            <p className='py-2'>Átila França do Nascimento</p>
            <p className='py-2'>Cauê Cassiano dos Santos</p>
            <p className='py-2'>Arthur do Amaral da Silva</p>
        </div>
        <div className=' text-xl'>
            <p className='font-bold mb-6'>About Us</p>
            <p className='py-2'>Our institution</p>
            <p className='py-2'>About this project</p>
        </div>
        <div className='pr-8 text-xl'>
            <p className='font-bold mb-6'>Useful Links</p>
            <p className='py-2'><a href='https://blog.magezon.com/website-shopping-cart-page-ultimate-guide-ecm/'>Cart's ref.</a></p>
            <p className='py-2'><a href='https://cssauthor.com/e-commerce-template-psd-for-online-bookstore/'>Catalog's ref.</a></p>
            <p className='py-2'><a href="https://nerdcave.com/tailwind-cheat-sheet">TailwindCSS styles sheets</a></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
