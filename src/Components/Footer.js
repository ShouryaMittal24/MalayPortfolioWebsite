import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa'

function Footer()
{
    return(
        <div className="py-3 border bg-black">
            <div className="flex justify-center mt-4">
            <a className='text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300' href='https://github.com/silentwraithcoder'>
                        <FaGithub />
                        <span class='sr-only'>Github</span>
                    </a>

                    <a className='text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-800 rounded-full hover:text-white transition-colors duration-300' href='https://www.linkedin.com/in/malay-kaushik-282b911b4/'>
                        <FaLinkedin />
                        <span class='sr-only'>LinkedIn</span>
                    </a>

                    <a className='text-xl m-1 p-1 sm:m-2 sm:p-2 text-pink-600 hover:bg-pink-600 rounded-full hover:text-white transition-colors duration-300' href='https://www.instagram.com/malaykaushik_007/'>
                        <FaInstagram />
                        <span class='sr-only'>Instagram</span>
                    </a>

                    <a className='text-xl m-1 p-1 sm:m-2 sm:p-2 text-green-800 hover:bg-green-800 rounded-full hover:text-white transition-colors duration-300' href=''>
                        <FaEnvelope />
                        <span class='sr-only'>Gmail</span>
                    </a>

            </div>
        </div>
    )
}

export default Footer;