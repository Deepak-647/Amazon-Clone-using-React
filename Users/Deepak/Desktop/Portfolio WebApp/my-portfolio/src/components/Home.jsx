import React from 'react'
import Heroimage from '../assets/portfolio/Heroimage.jpg'
import {AiOutlineArrowRight} from 'react-icons/ai'
import {Link} from 'react-scroll'
const Home = () => {
  return (
    <div name="home" className='w-full h-screen bg-gradient-to-b from-black via-black to-gray-800  '>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row '>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>I'm a FrontEnd Developer</h2>
                <p className='text-gray-500 py-4 max-w-md'>I am looking for an opportunity for the React Js Front End Role.
                    Currently , I love to work on web application using technologies like React ,Tailwind, RTK . 
                </p>
                <div>
                    <Link to='portfolio' smooth duration={500} className='group cursor-pointer text-white w-fit px-6 py-3 my-2 flex items-center rounded bg-blue-800 tex-2xl'>
                        Portfolio
                        <span className='group-hover:rotate-90 duration-300 px-2'><AiOutlineArrowRight size={20}/></span>
                    </Link>
                </div>
            </div>
            <div>
                <img className='md:w-full rounded-2xl mx-auto w-2/3' src={Heroimage} alt="profile"/>
            </div>
        </div>
    </div>
  )
}

export default Home