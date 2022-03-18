import React from 'react'
import User from '../pages/User'
import { useParams } from 'react-router-dom';

function UserPage() {

  const params=useParams()


  return (
    <div><User theuser={params.login}/></div>
  )
}

export default UserPage