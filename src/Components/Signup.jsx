import React from 'react'

export default function Signup() {

     const handleSubmit = () =>{
        alert("Submitted successfully kindly log in")
       }
       return (

        <div className="wrapper">
                <div className='title'>
                  Registration Form
                </div>
          <div className='form'>
      
                              <div className='input_field'>
                              <label>First Name</label>
                              <input type="text" placeholder="first name" />
                              </div>
                            
      
                          <div className='input_field'>
                            <label>Last Name</label>
                            <input type="text" placeholder="last name" />
                          </div>
      
                          <div className='input_field'>
                            <label>Password</label>
                            <input type="text" placeholder="password" />
                          </div>
      
                          <div className='input_field'>
                            <label>Confirm Password</label>
                            <input type="text" placeholder="password" />
                          </div>
      
                          <div className='input_field'>
                            <label>Gender</label>
                            <div className='custom_select'>
                              <select>
                                <option value="">Select</option>
                                <option>Male</option>
                                <option>Female</option>
                              </select>
                            </div>
                          </div>
                            
                          <div className='input_field'>
                            <label>Email Address</label>
                            <input type="text" className='input' />
                          </div>
      
                          <div className='input_field'>
                            <label>Phone Number</label>
                            <input type="text" className='input' />
                          </div>
      
      
                          <div className='input_field'>
                            <label>Password</label>
                            <input type="text" className='input' />
                          </div>
      
                          <div className='input_field'>
                            <label>Address</label>
                            <textarea className='textarea'></textarea>
                          </div>
      
                          <div className='input_field'>
                            <label>Register As</label>
                            <div className='custom_select'>
                              <select>
                                <option value="">Select</option>
                                <option>Advocate</option>
                                <option>Guardian</option>
                              </select>
                            </div>
                          </div>
                          <button type="submit" onClick={handleSubmit}>Submit</button>

      
                          <div className='input_field terms'>
                            <label className='check'>
                              <input type="checkbox"/>
                              <span className='checkmark'></span>
                            </label>
                            
                            <p>Agreed to terms and conditions</p>
                            
                          </div>                         
      
                          <div className='input_field'>
                          <p>By Clicking the Submit button ,you agree to our<br/>< a href='#'>Terms and Condition</a> and <a a href='#'>Policy Privacy</a></p>

                          <p>Successfully Registered? < a href='http://localhost:3000/portal'>Login Here</a></p>
                          </div>
      
      
      
      
      
        </div>
        </div>
      )}