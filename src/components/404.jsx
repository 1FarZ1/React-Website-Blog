

import React from 'react'
import { Link } from 'react-router-dom'

export default function Page404() {
  return (
    // create me a 404 page
    <div className='Page404'>
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <Link to="/">
        <p>
        Back to Home Page ...
        </p>
        </Link>
    </div>
  )
}
