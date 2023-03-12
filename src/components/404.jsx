

import React from 'react'
import { Link } from 'react-router-dom'
import {useFetch} from '../hooks/useFetch'

export default function Page404() {
  const data = useFetch('https://jsonplaceholder.typicode.com/posts/1');
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
