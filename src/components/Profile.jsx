import React from 'react'
import {useSelector} from 'react-redux'

const Profile = () => {
  const user = useSelector((state) => state.user.value)
  return (
    <div>
        <h1>Profile Page</h1>
        <p>First Name: {user.firstName}</p>
        <p>Second Name: {user.lastName}</p>
        <p>Age: {user.age}</p>
        <p>Email: {user.email}</p>
    </div>
  )
}

export default Profile