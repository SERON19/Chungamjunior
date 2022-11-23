// import React from 'react'

// export default function Advocates() {
//   return (
//      <>
//     advocates here  
//     </>
//   )
// }

const Advocates = () => {
    return ( 
        <>
        <form>
        <label> First Name</label>
      <input type="text" placeholder="First Name" />
      <label>Second Name</label>
      <input type="text" placeholder="Second Name" />
      <label>Surname</label>
      <input type="text" placeholder="Surname" />
      <label>Email</label>
      <input type="text" placeholder="Email" />
      <input>Password</input>
      <input type="password" placeholder = ""/>
      <label>Confirm Password</label>
      <input type="password" placeholder=""/>
      <input type="button" value = "submit"/> 
        </form>
        <div className="adv">
            <img src="" alt="img"/>
            <h3>Mr.Haki</h3>
            <p>Bsc law description</p>
            <p>07123456789</p>        
        </div>
        </>
     );
}
 
export default Advocates;