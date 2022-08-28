import React from 'react'
import { Link } from 'react-router-dom'

export default function PageNotFound() {
  return (
    <div className='notfound'>PageNotFound<br/>
    Error<br/>
    404<br/>
    <Link className='linknotfound' to='/'>{'<-'}back to home page</Link>
        
    </div>
    
  )
}
