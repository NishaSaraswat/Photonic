import React,{useEffect, useState} from 'react';
import mongoosy from 'mongoosy/frontend';
const { User, Photo } = mongoosy;
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import DeleteIcon from '@material-ui/icons/Delete';
import LastPosted from '../components/LastPosted'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import Avataricon from "@material-ui/core/Avatar";
import '../styleapp/HomePage.css'
import {Link} from "react-router-dom"

const Photos = () => {
    const [allPhotos, setAllPhotos]=useState([]);
    let [count, setCount]=useState(0)


    
    const getAllPhotos=async ()=>{
        let photos=await Photo.find();
        photos.sort((a, b) => a.posted > b.posted ? -1 : 1);
        //console.log(photos);
        setAllPhotos(photos)
        
    }

    useEffect(() => {
        getAllPhotos();
    }, [])

    
    const handleLikes=()=>{
        count++;
        setCount(count);
        console.log(`icon is clicked ${count} times`)
    }

    return (
        <div className="feed">
            <div className="post">
             {allPhotos.map(photo => <div key={photo.url}>

                <div className="post-header">
                    <Avataricon
                        className="post-avatar"
                        alt={photo.authorName}
                        src="/static/images/avatar/1.jpg"
                        />
                    <h3 className="post-text-user">{photo.authorName}</h3>
                </div>

                <img 
                    src={'/uploads/' + photo.url} 
                    className="post-image"
                    alt="picture"
                />

                <div className="post-icons">
                    <div className="post-commentIcon">  
                        <ChatBubbleOutlineIcon
                            alt={''}
                            src=""
                            onClick={""}
                        />
                    </div>

                    <div className="post-thumpUp">
                        <ThumbUpIcon 
                            onClick={handleLikes}
                        />
                        <span className="post-likes">{count} likes</span>
                    </div> 
                </div>

                <h4 className="post-text"><strong>{photo.authorName} </strong>{photo.description}</h4>
                <h4 className="post-tags">{photo.tags}</h4>

                <div className="post-date">
                    <LastPosted 
                    className="posted"
                    date={photo.posted} />
                </div>
                <div><Link to={`/uploads/${photo["author"]}`}>Show profile</Link></div>
             
            </div>)}
        </div>
    </div>
    )
}

export default Photos
