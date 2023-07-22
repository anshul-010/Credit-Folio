import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { Home } from '../components/Home'
import { Login } from '../components/Login'
import { About } from '../pages/About'
import { Blog } from '../pages/Blog'
import { CreditReport } from '../pages/CreditReport'
import { Education } from '../pages/Education'
import { HelpCenter } from '../pages/HelpCenter'

export const Navbar = () => {
  return (
    <div>

        {/* <Link to='/'>Home</Link>
        <Link to='/login'>Login</Link> */}

        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/about' element={<About/>}/>
            <Route path='/blog' element={<Blog/>}/>
            <Route path='/creditreport' element={<CreditReport/>}/>
            <Route path='/education' element={<Education/>}/>
            <Route path='helpcenter' element={<HelpCenter/>}/>
        </Routes>
    </div>
  )
}
