import React from 'react'
import AllPhotos from '../components/AllPhotos'
import '../styleapp/HomePage.css'
import LogoHeader from '../components/LogoHeader'
import Footer from '../components/Footer'
//import { PostAddSharp } from '@material-ui/icons';

const HomePage = () => {
    return (
        <div className="Homepage-feed">
            <LogoHeader/>
            <div className="Main">
                <AllPhotos />    
            </div>
            <Footer/>
        </div>
    )
   
}

export default HomePage
