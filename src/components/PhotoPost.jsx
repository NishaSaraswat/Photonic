import React, {useState, useEffect, useContext} from 'react'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import DeleteIcon from '@material-ui/icons/Delete';
import LastPosted from './LastPosted'
import mongoosy from 'mongoosy/frontend';
import {Link,  useRouteMatch} from 'react-router-dom'
const { User, Photo } = mongoosy;


const PhotoPost = ({url,authorName,description,likes,tags,time,author}) => {
    

    return (
        <div >
            <h4>created by: {authorName}</h4>
            <img src={'/uploads/' + url} style={{width:'100%'}}/>
            <FavoriteBorderIcon />
            <span>{likes} likes</span>
            <p>{authorName}: {description}</p>
            <p>{tags}</p>
            <LastPosted date={time} />
            <DeleteIcon />
            <hr/>     

        <Link to={`uploads/${author["_id"]}`}>Show Profil</Link>     
        </div>
        
    
        )

}

export default PhotoPost;
