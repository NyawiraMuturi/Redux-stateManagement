import React from 'react'
import {useSelector} from 'react-redux'

const Profile = () => {
  const user = useSelector((state) => state.user.value)
  const theme = useSelector((state) => state.theme.value)

  return (
    <div style={{color:theme}}>
        <h1>Profile Page</h1>
        <p>First Name: {user.firstName}</p>
        <p>Second Name: {user.lastName}</p>
        <p>Age: {user.age}</p>
        <p>Email: {user.email}</p>
    </div>
  )
}

export default Profile