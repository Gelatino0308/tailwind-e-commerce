import brandLogo from './assets/logo.png'
import cartLogo from './assets/cart.png'

export default function Nav () {

    return (
        <nav className='bg-violet flex justify-between p-3 fixed w-full z-50 lg:p-5'>
            <a href="#home" className='flex items-center gap-2'>
                <img src={brandLogo} alt="logo" className='w-10'/>
                <span className='text-h6 font-bold text-white'>The Tailor</span>
            </a>
    
            <a href="#products">
                <img src={cartLogo} alt="checkout" className='w-10' />
            </a>
        </nav>
    )
}