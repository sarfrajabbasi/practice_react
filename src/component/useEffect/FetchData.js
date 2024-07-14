import React, { useEffect, useState } from 'react'
import UserProfile from './UserProfile'

const FetchData = () => {
    const [data,setData] =  useState(null)
    useEffect(()=>{
        fetch('https://randomuser.me/api/?results=5').then(response =>response.json()).then(data=>{
            setData(data.results)
        }).catch(error=> console.log(`errorr fetching data :--  ${error}`))

        return ()=>{
            // Cleanup code if necessary
        }
        // Runs only once after the initial render
    },[])
   
  return (
    <div>

        {/* {data ? <p>Data:{JSON.stringify(data)}</p> : <p>Loading...</p>}
         */}
         {data ? (data.map((user,index)=>( 
            <UserProfile key={index} user={user}></UserProfile>)
         )) :(<p>Loading...</p>)}
    </div>
  )
}


export default FetchData