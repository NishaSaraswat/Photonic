import React from 'react'
import '../styleapp/Footer.css'
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import CropOriginalIcon from '@material-ui/icons/CropOriginal';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';



function Footer() {
    return (
        <div className="footer">


            <div className="footer-icons">
                <CropOriginalIcon
                className="footer-pics"
                alt={''}
                src=""

                />
            </div>

            <div className="footer-icons">
            <PhotoCameraIcon
                className="footer-camera"
                alt={''}
                src=""

                />
            </div>

            <div className="footer-icons">
            <ChatBubbleOutlineIcon
                className="footer-chat"
                alt={''}
                src=""

                />
                
                </div>
                
                <div className="footer-icons">
            <PersonOutlineIcon
                className="footer-profile"
                alt={''}
                src=""

                />
                
            </div>
            
        </div>
    )
}

export default Footer