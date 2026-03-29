import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="text-center mt-4">
      <h2>404-Page Not Found</h2>
      <p>The page you are looking for doesnot exist</p>
      <Link to="/" className="btn btn-primary">
        Go Back Home
      </Link>
    </div>
  )
}