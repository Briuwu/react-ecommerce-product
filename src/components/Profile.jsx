import React from 'react'
import ProfileIcon from '../images/image-avatar.png'

const Profile = () => {
  return (
    <div>
      <img className='profile-icon' src={ProfileIcon} alt="Profile" />
    </div>
  )
}

export default Profile