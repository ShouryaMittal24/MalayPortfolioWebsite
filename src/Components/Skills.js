import React from 'react'

import { SiJava } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { SiJavascript } from 'react-icons/si';
import { SiPython } from 'react-icons/si';
import { DiNodejs } from 'react-icons/di'
 
function Skills() {
  return (
    

      <div className='max-w-4xl mx-auto justify-center py-12'>
          <p className="text-2xl text-black  md:text-4xl font-bold text-center pt-4">
          <a href="#" class="no-underline hover:underline">Tech I Use</a> 
          </p>
      

      <div className = "grid grid-cols-3 m-2 justify-center pt-2">
          
        
          <div className="w-40 p-10 m-6 overflow-hidden bg-gradient-to-r from-cyan-200 to-blue-700 hover:from-pink-300 hover:to-red-500 shadow-2xl rounded-xl sm:w-52">
            <SiJava color="orange" className="mx-auto text-4xl" />
            <p className="mt-6 text-xl font-semibold text-center">
              Java 
            </p>
          </div>

          <div className="w-40  p-10 m-6 overflow-hidden bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-orange-400 hover:to-green-400 shadow-2xl rounded-xl sm:w-52">
            <FaReact color="#2196f3" className="mx-auto text-4xl " />
            <p className="mt-6 text-xl font-semibold text-center">
              React
            </p>
          </div>

          <div className="w-40  p-10 m-6 overflow-hidden bg-gradient-to-r from-yellow-500 to-red-500 hover:from-teal-400 hover:to-blue-300 shadow-2xl rounded-xl sm:w-52">
            <SiTailwindcss color="#00C0A3" className="mx-auto text-4xl" />
            <p className="mt-6 text-base font-semibold text-center">
              TailwindCSS
            </p>
          </div>
          
        
          
          <div className="w-40  p-10 m-6 overflow-hidden bg-gradient-to-r from-emerald-500 via-purple-500 to-pink-500 hover:from-pink-600 hover:to-yellow-500 shadow-2xl rounded-xl sm:w-52">
            <SiJavascript color="#ffdf00" className="mx-auto text-4xl" />
            <p className="mt-6 text-xl font-semibold text-center">
              JavaScript
            </p>
          </div>

          <div className="w-40 p-10 m-6 overflow-hidden bg-gradient-to-r from-yellow-500 via-emerald-500 to-red-200 hover:from-amber-400 hover:to-lime-500 shadow-2xl rounded-xl sm:w-52">
            <SiPython color="yellow" className="mx-auto text-4xl" />
            <p className="mt-6 text-xl font-semibold text-center">
              Python 
            </p>

          </div>

          <div className="w-40 p-10 m-6 overflow-hidden bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-50 hover:to-blue-700 shadow-2xl rounded-xl sm:w-52">
            <DiNodejs color="green" className="mx-auto text-4xl" />
            <p className="mt-6 text-xl font-semibold text-center">
              Node.js 
            </p>

          </div>

          
        
      </div>
    </div>
  
  )
}

export default Skills