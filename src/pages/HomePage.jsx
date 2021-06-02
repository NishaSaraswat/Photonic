import React from 'react'
import AllPhotos from '../components/AllPhotos'
import '../styleapp/HomePage.css'
import LogoHeader from '../components/LogoHeader'
import Footer from '../components/Footer'
//import { PostAddSharp } from '@material-ui/icons';

const HomePage = ({photos, userName}) => {


    return (

        <>
 
         <div className="Main">
         
             <LogoHeader/>
      
             {posts.mao(post => (
                 <Post  username={post.username}  
                        imageUrl={post.imageUrl}
                        description={post.description}
                        tags={post.tags}
                />
         
             
         
     
             ))}
          </div>
          
            
  

            <Post/>

        <div className="Homepage-feed">

        <LogoHeader/>

         <div className="Main">
            

            <AllPhotos />

           
            
        </div>

        <Footer/>

        </div>
</>

    )
   
}

export default HomePage
