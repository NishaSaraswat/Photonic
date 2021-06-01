import React from 'react'
import AvatarCamera from '../components/AvatarCamera'
import Footer from '../components/Footer'
import HeaderAllPages from '../components/HeaderAllPages'
import '../styleapp/upload-camera.css'

const ProfilePage = ({userName}) => {
    return (
    <div >
        <HeaderAllPages/>

        <div className="profile-wrapper">

            <AvatarCamera />

        </div>

        <Footer/>

    </div>)}

export default ProfilePage
