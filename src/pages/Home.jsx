import React from 'react'
import { useState } from 'react'
import SearchPage from '../pages/SearchPage'

function Home(props) {
    const [username,Setusername]=useState(null)

    const send = (x)=>{
        
        props.username(x)
        
    }
  return (
    <div><SearchPage realname={(x)=>{send(x)}}/></div>
  )
}

export default Home
