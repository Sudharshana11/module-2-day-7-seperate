import React from 'react'
import "../Assets/CSS/NavBar.css"
import {Link} from 'react-router-dom'
function NavBar() {
  return (
    <div>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/ViewPage">View page</Link></li>
            <li><Link to="/CreatePage">Create page</Link></li>
            <li><Link to="/UpdatePage">Update page</Link></li>
            <li><Link to="/DeletePage">Delete page</Link></li>
        </ul>
    </div>
  )
}

export default NavBar
