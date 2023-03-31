import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import {auth} from '../firebase';
import {useNavigate} from 'react-router-dom'

export default function Navbar({user}) {
  const navigate = useNavigate()
  return (
    <div >
      <nav >
    <div className="nav-wrapper green  ">
      <Link to="/" className="brand-logo" style={{marginLeft:'10px'}}>Waste Management</Link>
      <ul id="nav-mobile" className="right ">

      {
        user?
        <li>
          <button className="btn red" style={{marginRight:'20px'}} onClick={()=>{
            auth.signOut()
            navigate('/login')
            }}>Logout</button>
        </li>
        :
       <> 
          <li><Link to="/login" style={{marginRight:'20px'}}>Login</Link></li>
          <li><Link to="/signup" style={{marginRight:'20px'}}>Signup</Link></li>
        </>
      }

        
      </ul>
    </div>
    </nav>
    </div>

  );
}
