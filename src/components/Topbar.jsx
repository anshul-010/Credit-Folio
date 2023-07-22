import React from 'react'
import "../CSS/navbar.css"
import { Link } from 'react-router-dom'

export const Topbar = () => {
  return (
    <div>
        <div className='navbar'>
            <div className='logo'><Link to='/'>CIBIL</Link></div>
            <div className="pages">
              <Link to='/creditreport'><p>Credit Report</p></Link>
              <Link to='/education'><p>Credit Education</p></Link>
              <Link to='/helpcenter'><p>Help Center</p></Link>
              <Link to='/about'><p>About</p></Link>
              <Link to='/blog'><p>Blog</p></Link>
            </div>
            <div className='btn'>
            <Link to='/login'> <button className='login-btn'>Log in</button></Link>
            </div>
          
        </div>
      <hr style={{backgroundColor:'yellow',height:"4px"}} />
    </div>
  )
}
