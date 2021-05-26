import React from 'react'
import Avataricon from "@material-ui/core/Avatar";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import '../styleapp/Post.css'

function Post() {
    return (
    <div className="feed">

         <div className="post">
        
        {/*Header + avatar + username*/}
            <div className="post-header">
                <Avataricon
                    className="post-avatar"
                    alt={''}
                    src="/static/images/avatar/1.jpg"
                />
                
                <h3>Baasti</h3>
            </div>

        
            <img 
                className="post-image"
                src="https://cdn.pixabay.com/photo/2021/05/14/08/44/running-6252827_1280.jpg" 
                alt="picture"
                />
    
            <h4 className="post-text"><strong>Baasti:</strong> härligt med springtur </h4>
            <h4 className="post-likes">5 likes</h4>

            <div className="post-icons">   
                <FavoriteBorderIcon
                    className="post-heartIcon"
                    alt={''}
                    src=""
                />
                <ChatBubbleOutlineIcon
                    className="post-commentIcon"
                    alt={''}
                    src=""
                />
            </div>
    
        </div>

        <div className="post">
        
        {/*Header + avatar + username*/}
            <div className="post-header">
                <Avataricon
                    className="post-avatar"
                    alt={''}
                    src="/static/images/avatar/1.jpg"
                />
                
                <h3>Baasti</h3>
            </div>

        
            <img 
                className="post-image"
                src="https://cdn.pixabay.com/photo/2021/05/14/08/44/running-6252827_1280.jpg" 
                alt="picture"
                />
    
            <h4 className="post-text"><strong>Baasti:</strong> härligt med springtur </h4>
            <h4 className="post-likes">5 likes</h4>

            <div className="post-icons">   
                <FavoriteBorderIcon
                    className="post-heartIcon"
                    alt={''}
                    src=""
                />
                <ChatBubbleOutlineIcon
                    className="post-commentIcon"
                    alt={''}
                    src=""
                />
            </div>
  
        </div>

        <div className="post">
        
        {/*Header + avatar + username*/}
            <div className="post-header">
                <Avataricon
                    className="post-avatar"
                    alt={''}
                    src="/static/images/avatar/1.jpg"
                />
                
                <h3>Baasti</h3>
            </div>

        
            <img 
                className="post-image"
                src="https://cdn.pixabay.com/photo/2021/05/14/08/44/running-6252827_1280.jpg" 
                alt="picture"
                />
    
            <h4 className="post-text"><strong>Baasti:</strong> härligt med springtur </h4>
            <h4 className="post-likes">5 likes</h4>

            <div className="post-icons">   
                <FavoriteBorderIcon
                    className="post-heartIcon"
                    alt={''}
                    src=""
                />
                <ChatBubbleOutlineIcon
                    className="post-commentIcon"
                    alt={''}
                    src=""
                />
            </div>

            
        </div>

        </div>

        
    )
}

export default Post

