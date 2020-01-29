import React from 'react'
import { Link } from 'react-router-dom';

import classes from './Header.module.scss';

const Header = () => {
  return (
    <header className={classes.header}>
      <span>Top Apps By Host</span>
      <Link to="/">
        Home
      </Link>
    </header>
  )
}

export default Header
