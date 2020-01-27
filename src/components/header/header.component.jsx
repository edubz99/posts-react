import React from 'react';
import './header.styles.scss'
import { Link } from 'react-router-dom';


const Header = () => (

    <div className="header">
      <Link className="header-link" to="/">
        HOME
      </Link>
      <Link className="header-link" to="/posts">POSTS</Link>
    </div>
)

export default Header;
