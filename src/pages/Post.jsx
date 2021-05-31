import React, { useEffect } from 'react';
import mongoosy from 'mongoosy/frontend';
const { User, Photo } = mongoosy;
import Avataricon from "@material-ui/core/Avatar";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import '../styleapp/Post.css'

function Post() {

    const g = useNamedContext('global');
    const s = useStates({
      users: [],
      imageData: '',
      tags:'',
      description:'',
    });

    const getUsers = async () => {
        s.users = await User.find();
        s.display = true;
      }
      useEffect(() => getUsers(), []);


    return (
    <div className="feed">

         <div className="post">

            <div className="post-header">
                <Avataricon
                    className="post-avatar"
                    alt={''}
                    src="/static/images/avatar/1.jpg"
                />
                <h3>{userName}</h3>
            </div>

            <img 
                className="post-image"
                src={imageData} 
                alt="picture"
                />
    
            <h4 className="post-text"><strong>{userName}</strong>{description}</h4>
            <h4 className="post-likes">5 likes</h4>
            <h4 className="post-tags">{tags}</h4>

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
                    onclick={""}
                />
            </div>
        </div>
    </div>
        
    )
}

export default Post

