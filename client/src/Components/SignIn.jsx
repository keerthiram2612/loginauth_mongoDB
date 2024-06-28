import React from 'react'
import  "./SignIn.css"
import Nature from "../assets/nature.jpeg"
export default function SignIn() {
  return (
    <div className='signPage'>
      <div className='images'></div>
         <div className='components'>
           <label>Email</label><input type="text" placeholder='Enter the username'/><br/>
           <label>Password</label><input type="text" placeholder='Enter your password'/><br/>
           <button>Login</button>
         </div>
         </div>
  )
}
