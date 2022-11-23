import React from 'react'


function Footer() {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='row'>

          <div className ="footer-col">
            <h4>Contacts</h4>
              <ul>
                <li>0713088520</li>
                <li>0791440828</li>
                <li>chungamjunior@gmail.com</li>
              </ul>
          </div>

          <div className ="footer-col">
            <h4>Quick Links</h4>
              <ul>
               <li><a href="/judiciary/how-to-2/">How To</a></li>
               <li><a href="http://kenyalaw.org/kl/index.php?id=8281" target="_blank">Cause List</a></li>
               <li><a href="https://www.judiciary.go.ke/our-partners/">Our Partners</a></li>
              </ul>
           </div>

          <div className ="footer-col">
            <h4>Follow Us</h4>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa fa-twitter-square">@bomet036</i>
            <br/>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa fa-facebook-square">Bomet036</i>
            <br/>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa fa-instagram">Bomet036</i>
            <br/>  
          </div>
          </div>
     </div>
   </footer>
  )
}

export default Footer