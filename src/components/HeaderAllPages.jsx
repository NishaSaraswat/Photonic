import React from 'react'
import LogoChat from '../styleapp/icons/LogoChat.png'
import Avataricon from "@material-ui/core/Avatar";
import '../styleapp/LogoHeader.css'

function HeaderAllPages() {
    return (
        <div className="header">
            <img src={LogoChat} 
                alt="LogoChat" 
                id="LogoChat"
            />
                
            <div className="header-icons">

                <Avataricon
                    className="header-avatar"
                    alt={''}
                    src="/static/images/avatar/1.jpg"
                />
            </div>
        </div>
    )
}
export default HeaderAllPages
