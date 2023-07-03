import React   from 'react'
import Sidebar from './Sidebar'

import { Outlet } from 'react-router-dom'
import Head from './Head'

const Body = () => {
  return (<div className='overflow-hidden'>
  <Head/>
  <div className='flex'>
         <Sidebar/>
         <Outlet/> 
   
    </div>
  </div>
    
   
  )
}

export default Body