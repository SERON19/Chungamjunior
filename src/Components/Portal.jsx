import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Portal() {

  const handleClick = () => {
    alert("Logged in successfully")
  }
  

        const navigate = useNavigate()
          return (
            <>
            <div className="loginbox">
              <img src='download.jpeg' className='icon'/>
              <h1>Login Here</h1>
            <form> 
              <p>Username</p>
              <input type="text" name="" placeholder = "Enter Username"/>
              <p> Password</p>
              <input type="password" name="" placeholder = "Enter Password"/>                
              <input type="submit" name="" onClick={handleClick} value ="Login"/><br/>
              <a href="#">Lost your password?</a>
              <p>Not have an account? < a href='http://localhost:3000/signup'>Sign Up Here</a></p>

          </form>
             </div> 
   
    </>
  )
}