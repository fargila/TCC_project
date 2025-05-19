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
                    <a 
        href='https://www.instagram.com/_fargila/' 
        className='
          border border-black rounded-full text-2xl mr-4 p-2 
          bg-white hover:bg-pink-50 
          text-pink-600 hover:text-pink-700 
          transition-colors duration-200
          shadow-sm hover:shadow-md
        '
      >
        <FaInstagram/>
      </a>
      
      <a 
        href='https://www.linkedin.com/in/%C3%A1tila-fran%C3%A7a-8066a0249/' 
        className='
          border border-black rounded-full text-2xl p-2 
          bg-white hover:bg-blue-50 
          text-blue-600 hover:text-blue-700 
          transition-colors duration-200
          shadow-sm hover:shadow-md
        '
      >
        <FaLinkedinIn/>
      </a>
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
            <a 
              href='https://www.unipe.edu.br/' 
              className='
                py-2 text-gray-700 hover:text-blue-600 
                transition-colors duration-200
                hover:underline underline-offset-4
              '>Our institution
            </a>
            <p className='py-2'>About this project (in progress)</p>
        </div>
        <div className='pr-8 text-xl'>
            <p className='font-bold mb-6'>Useful Links</p>
            <a 
            href='https://blog.magezon.com/website-shopping-cart-page-ultimate-guide-ecm/' 
            className='
              py-2 text-gray-700 hover:text-blue-600 
              transition-colors duration-200
              hover:underline underline-offset-4
              block
            '
          >
            Cart's ref.
          </a>
          
          <a 
            href='https://cssauthor.com/e-commerce-template-psd-for-online-bookstore/' 
            className='
              py-2 text-gray-700 hover:text-blue-600 
              transition-colors duration-200
              hover:underline underline-offset-4
              block
            '
          >
            Catalog's ref.
          </a>
          
          <a 
            href='https://nerdcave.com/tailwind-cheat-sheet' 
            className='
              py-2 text-gray-700 hover:text-blue-600 
              transition-colors duration-200
              hover:underline underline-offset-4
              block
            '
          >
            TailwindCSS styles sheets
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
