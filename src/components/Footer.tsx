import logo from '../assets/logo.png';
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="gradientBg rounded-xl md:px-14 p-4 max-w-screen-2xl mx-auto">
            <div className='my-12 flex flex-col md:flex-row gap-10'>
                <div className='md:w-1/2 space-y-8'>
                    <a href="/"
                        className='text-4xl font-weight: 800 flex items-center space-x-5'
                    >
                        <img src={logo} alt="logo" className='rotate w-12 inline-block items-center  p-2 space-x-5 rounded-full  border-solid border-2 border-stone-400 gradientBg ' />
                        <span> W&E<code className="text-sm font-semibold">-ltd.</code> </span>
                    </a>
                    <p className='md:w-1/2'>
                        Committed to excellence, innovation, and your success. © 2024 W&E<code className="text-sm font-semibold">-ltd.</code>. All rights reserved.
                    </p>
                    <div>
                        <input type="email" name="email" id="email" placeholder='Your email' className='bg-slate-200 py-2 px-4 rounded-md focus:outline-none' />
                        <input type="submit" value="Subscribe" className='px-4 py-2 bg-yellow-300 rounded-md -ml-2 cursor-pointer hover:bg-yellow-400 transition-all ' />
                    </div>
                </div>



                <div className='md:w-1/2 flex flex-col md:flex-row flex-wrap justify-between gap-8 items-start'>
                    <div className='space-y-4 mt-5'>
                        <h4 className='text-xl'>Platform</h4>
                        <ul className='space-y-3'>
                            <a href="/" className='block hover:text-gray-500'>Overview</a>
                            <a href="/" className='block hover:text-gray-500'>Feature</a>
                            <a href="/" className='block hover:text-gray-500'>About</a>
                            <a href="/" className='block hover:text-gray-500'>Pricing</a>
                        </ul>
                    </div>
                    <div className='space-y-4 mt-5'>
                        <h4 className='text-xl'>Help</h4>
                        <ul className='space-y-3'>
                            <a href="/" className='block hover:text-gray-500'>How does it work?</a>
                            <a href="/" className='block hover:text-gray-500'>Where to ask question?</a>
                            <a href="/" className='block hover:text-gray-500'>How to get started?</a>
                            <a href="/" className='block hover:text-gray-500'>What services do we offer?</a>
                        </ul>
                    </div>
                    <div className='space-y-4 mt-5'>
                        <h4 className='text-xl'>Contacts</h4>
                        <ul className='space-y-3'>
                            <p className='hover:text-gray-500'>(012)-3456789</p>
                            <p className='hover:text-gray-500'>321 w&e w&e</p>
                            <p className='hover:text-gray-500'>abcdefg, hij- kert</p>
                            <p className='hover:text-gray-500'>098765</p>
                        </ul>
                    </div>
                </div>
            </div>
            <hr />
            <div className='flex flex-col sm:flex-row gap-8 sm:item-center justify-between'>
                <p>© 2024 W&E. All rights reserved. </p>
                <div className=' flex items-center space-x-5'>
                    <FaTwitter className=' cursor-pointer hover:text-slate-500' />
                    <FaFacebookSquare className=' cursor-pointer  hover:text-slate-500' />
                    <FaInstagramSquare className=' cursor-pointer  hover:text-slate-500' />
                    <FaLinkedin className=' cursor-pointer  hover:text-slate-500' />
                </div>
            </div>
        </div>
    )
}

export default Footer
