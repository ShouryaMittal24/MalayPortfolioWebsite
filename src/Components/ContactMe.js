import { FaArrowRight } from 'react-icons/fa';

export default function ContactMe() {
  return (
    <div className="max-w-lg w-full text-center m-auto pt-10 pb-10" id="contactme">
      <h1 className="text-4xl">Interested in working together?</h1>
      <a href="mailto:me.malaykaushik2000@gmail.com">
        <span className="mt-10 inline-block w-auto bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 font-display text-white text-base md:text-xl py-4 px-7 cursor-pointer hover:bg-white hover:text-black">
          <div className="flex col-row items-center">
            <span className="mr-3">Get in touch</span>
            <FaArrowRight className='color-white' />
          </div>
        </span>
      </a>
    </div>
  );
}