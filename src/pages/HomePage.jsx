import React from 'react'
import AllPhotos from '../components/AllPhotos'
import '../styleapp/HomePage.css'
import LogoHeader from '../components/LogoHeader'
import Footer from '../components/Footer'
import { PostAddSharp } from '@material-ui/icons'

const HomePage = ({photos, userName}) => {


    return (
         <div className="Main">
            <LogoHeader/>

            <AllPhotos />
           
            <Footer/>
        </div>

    )
}

export default HomePage
