import React from 'react'
import Post from './Post'
import '../styleapp/HomePage.css'
import LogoHeader from '../components/LogoHeader'
import Footer from '../components/Footer'
import { PostAddSharp } from '@material-ui/icons'

const HomePage = () => {
    return (
         <div className="Main">
             <LogoHeader/>

             {posts.mao(post => (
                 <Post  username={post.username}  
                        imageUrl={post.imageUrl}
                        description={post.description}
                        tags={post.tags}
                />
             ))}
            


            <Post/>
           
                <Footer/>
               
        </div>

    )
}

export default HomePage
