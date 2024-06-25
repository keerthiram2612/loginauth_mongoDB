import React from 'react'
import  "./SignIn.css"

export default function SignIn() {
  return (
    <div>
      <div className='signPage'>
         <div className='components'>
           <label>Email</label><input type="text" placeholder='Enter the username'/><br/>
           <label>Password</label><input type="text" placeholder='Enter your password'/>
         </div>
      </div>
    </div>
  )
}
