import React from 'react'
import "../CSS/navbar.css"
import { Link, useLocation,  } from 'react-router-dom'

export const Topbar = () => {
  const {pathname} = useLocation()
  console.log(pathname=='/education')
  return (
    <div>
        <div className='navbar' style={{border: 'none'}}>
            <div className='logo'><Link to='/'>Credit Folio</Link></div>
            <div className="pages">
            {/* <Link className={pathname == '//credit-report/' ? 'blue':''} to='/creditreport'><p >Accounts</p></Link> */}
              <Link  className={pathname == '/creditreport' ? 'blue':''} to='/creditreport'><p >Credit Report</p></Link>
              <Link className={pathname == '/education' ? 'blue':''} to='/education'><p>Credit Education</p></Link>
              <Link className={pathname == '/helpcenter' ? 'blue':''} to='/helpcenter'><p>Help Center</p></Link>
              <Link className={pathname == '/about' ? 'blue':''} to='/about'><p>About</p></Link>
              <Link className={pathname == '/blog' ? 'blue':''} to='/blog'><p>Blog</p></Link>
            </div>
            <div className='btn'>
            <Link to='/login'> <button className='login-btn'>Log in</button></Link>
            </div>
          
        </div>
      <hr style={{backgroundColor:'#32a8edcb',height:"2px", marginTop:'-2px'}} />
    </div>
  )
}
