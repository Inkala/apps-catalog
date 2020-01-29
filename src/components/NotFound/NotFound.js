import React from 'react'
import classes from './NotFound.module.scss'

const NotFound = () => {
  return (
    <div className={classes.notFound}>
      <h2>404</h2>
      <p>Oops... nothing to see here.</p>
    </div>
  )
}

export default NotFound
