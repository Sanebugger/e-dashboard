import React from 'react'
import {Link} from 'react-router-dom';
export default function Nav() {
  return (
    <div>
        <ul className='nav-ul'>
            <li>
                <Link to='/'>products</Link>
            </li>
            <li>
                <Link to='/add'>addProduct</Link>
            </li>
            <li>
                <Link to='/update'>updateProduct</Link>
            </li>
            <li>
                <Link to='/logout'>Logout</Link>
            </li>
            <li>
                <Link to='/profile'>profile</Link>
            </li>
            <li>
                <Link to='/SignUp'>SignUp</Link>
            </li>
        </ul>
    </div>
  )
}
