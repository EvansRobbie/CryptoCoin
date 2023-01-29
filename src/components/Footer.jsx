import React from 'react'
import ThemeToggler from './ThemeToggler'
import { AiOutlineInstagram} from'react-icons/ai'
import { FaFacebook, FaTwitter, FaGithub, FaTiktok} from 'react-icons/fa'

const Footer = () => {
    let today = new Date()
  return (
    <div className='rounded-div  mt-8 pt-8 text-primary'>
        <div className='grid md:grid-cols-2 '>
            <div className='flex justify-evenly w-full md:max-w-[300px] uppercase  '>
                <div>
                    <h2 className='font-bold'>Support</h2>
                    <ul>
                        <li className='text-sm py-2'>Help Center</li>
                        <li className='text-sm py-2'>Contact Us</li>
                        <li className='text-sm py-2'>API Status</li>
                        <li className='text-sm py-2'>Documentation</li>
                    </ul>
                </div>
                <div>
                    <h2 className='font-bold'>Info</h2>
                    <ul>
                        <li className='text-sm py-2'>About Us</li>
                        <li className='text-sm py-2'>Career</li>
                        <li className='text-sm py-2'>Invest</li>
                        <li className='text-sm py-2'>Legal</li>
                    </ul>
                </div>
            </div>
            <div className='text-right'>
                <div className='w-full flex  justify-end'>
                    <div className='w-full md:max-w-[300px] py-4'>
                        <div className='flex justify-center md:justify-end py-4 md:py-0 md:pb-4 mt-[-1rem]'>
                            <ThemeToggler/>
                        </div>

                        <p className='text-center md:text-right'>Sign Up for crypto News.</p>
                        <div className='py-4'>
                            <form>
                                <input className='bg-primary border border-input p-2 mr-2 shadow-xl rounded-2xl w-full  md:w-auto' type="email" placeholder='Enter Email..' />
                                <button className='bg-button text-btnText px-4 py-2 shadow-xl rounded-2xl w-full hover:shadow-2xl md:w-auto my-2'>Sign Up</button>
                            </form>
                        </div>
                        <div className='flex justify-evenly text-accent'>
                            <AiOutlineInstagram size={20}/>
                            <FaFacebook size={20} />
                            <FaTwitter size={20}/>
                            <FaGithub size={20}/>
                            <FaTiktok size={20}/>
                        </div>
                    </div>
                    </div>
            </div>
        </div>
        {/* </div >  */}
        <p className='text-center py-4'> &copy;  {today.getFullYear()}. Powered by Coin Gecko. Robbievans</p>
    </div>

  )
}

export default Footer