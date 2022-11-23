import React from 'react'
import { useState,useEffect } from 'react'

export default function Home() {
 const [showData, setshowData] = useState()
  const apiUrl = "http://localhost:5000/data"
  
 let displayData
//   function pullJson(){
//     fetch(apiUrl)
//      .then(response => response.json())
//      .then (responseData => {
//       displayData = responseData.map(function(data){
//         return(
//           <p key={data.id}>{data.title}</p>
//         )
//       })
//       console.log (responseData)
//       setshowData(displayData)
      
//      })
// }



async function getData() {
  const response = await fetch(apiUrl)
  const responseData= await response.json()
  displayData = responseData.map(function(data){
    return(
      <div className='contenthome'>
      <h6 key={data.id}>{data.title}</h6>
      <p>{data.content}</p>
      <p>{data.author}</p>
      </div>
    )
  })
    console.log(responseData)
    setshowData(displayData)

}


useEffect(()=>{
  getData()
},[])



  return (
    <div>
      <p>{showData}</p>
    </div>
  )
}
