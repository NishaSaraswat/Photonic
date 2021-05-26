import React from 'react'
import Post from './Post'
import Group2 from '../styleapp/icons/Group2.png'
import '../styleapp/HomePage.css'
import Photos from '../components/Photos'

const HomePage = (userName, photos) => {
    return (
        
        
        <div className="Main">
           <img src={Group2} alt="group2" id="group2"></img>
           
            

            <Post/>
            <Photos photos={photos} userName={userName}/>

                
            
            
           


        </div>
        
    )
}

export default HomePage
