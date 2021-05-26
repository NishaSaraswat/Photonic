import React from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import DeleteIcon from '@material-ui/icons/Delete';


const Photos = ({photos,time,userName}) => {
    return (
        <div>
             {photos.map(photo =><div key={photo.url}>
                <h5>created by: {photo.auther}</h5>
                <img src={'/uploads/' + photo.url} style={{width:'90%'}}/>
                <h5>{photo.url}</h5>
                <span>{time}</span>
                <FavoriteBorderIcon />
                <ThumbUpIcon />
                <DeleteIcon />
                <form>
                    <input type="text" placeholder="what do you think..."></input>
                </form>
    </div>)}
        </div>
    )
}

export default Photos
