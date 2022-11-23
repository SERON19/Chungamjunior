import React from 'react'

export default function Guardian() {
  return (
    <div className="login">
    <form> 
        <label>
          Login<br></br>
          <input type="text" placeholder="email" />  
        </label><br></br>
        <label>
        <input type="text" placeholder="password" />
        </label><br></br>
        <input type="button" value ="Submit"/>
        <p></p>
  </form>
<p>Not have an account? < a href='#'>Sign Up Here</a></p>
  </div>
  )
}