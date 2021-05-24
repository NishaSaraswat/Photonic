import React from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

const Photos = ({photos,time,userName}) => {
    return (
        <div>
             {photos.map(photo =><div key={photo.url}>
                <img src={'/uploads/' + photo.url} style={{width:'90%'}}/>
                <h5>{photo.url}</h5>
                <h5>created by: {userName}</h5>
                <span>{time}</span>
                <FavoriteBorderIcon />
                <ThumbUpIcon />
                <form>
                    <input type="text" placeholder="what do you think..."></input>
                </form>
    </div>)}
        </div>
    )
}

export default Photos
