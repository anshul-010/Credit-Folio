import React from 'react'
import "../CSS/navbar.css"
import { Link } from 'react-router-dom'
import { AiOutlineMenu } from 'react-icons/ai'

export const Topbar = () => {
  return (
    <div>
      <AiOutlineMenu className='hamburgger' style={{display:'none'}}/>
        <div className='navbar' style={{border: 'none'}}>
            <div className='logo'><Link to='/'>Credit Folio</Link></div>
            <div className="pages">
              <Link to='/creditreport'><p>Credit Report</p></Link>
              <Link to='/education'><p>Credit Education</p></Link>
              <Link to='/helpcenter'><p>Help Center</p></Link>
              <Link to='/about'><p className='about-p' >About</p></Link>
              <Link to='/blog'><p className='blog-p' >Blog</p></Link>
            </div>
            <div className='btn'>
            <Link to='/login'> <button className='login-btn'>Log In</button></Link>
            </div>
          
        </div>
      <hr style={{backgroundColor:'#32a8edcb',height:"2px", marginTop:'-1px'}} />
    </div>
  )
}
