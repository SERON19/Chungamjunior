import React from 'react'
import { useState, useEffect } from 'react'
import { useForm } from "react-hook-form";

export default function Lawyers() {

    const {
        register,
        handleSubmit,
        // Read the formState before render to subscribe the form state through the Proxy
        formState: { errors, isDirty, isSubmitting, touchedFields, submitCount },
      } = useForm();
      const onSubmit = (data) => console.log(data);

    // const handleSubmit = () =>{
    //     alert("Direct to order")
    //    }
    const [lawyers,setLawyers] = useState()

    const getUrl = "http://localhost:5000/data"


    let displayLawyers
    async function getLawyers(){
        const response = await fetch(getUrl)
        const responseData = await response.json()
        displayLawyers = responseData.map(function(data){
            return(
                <div className='lawyers'>
                <h5 key={data.id}> {data.lawyername}</h5>
                <p>{data.education}</p>
                <p>{data.sex}</p>
                <p>{data.experience}</p>
                <button type="submit" onClick={handleSubmit}>Send Request</button>

                </div>


                
            )
        })
        console.log(responseData)
        setLawyers(displayLawyers)
        }


   useEffect(() =>{
    console.log("helo")
        getLawyers()
   },[])







  return (
    <div>
            pata wakili hapa Lawyers
            rada
            <p>{lawyers}</p>
        </div>
  )
}
