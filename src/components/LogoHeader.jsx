import React from 'react'
import LogoChat from '../styleapp/icons/LogoChat.png'
import Avataricon from "@material-ui/core/Avatar";
import SearchIcon from '@material-ui/icons/Search';
import '../styleapp/LogoHeader.css'

function LogoHeader() {
    return (
        <div className="header">
            <img src={LogoChat} 
                alt="LogoChat" 
                id="LogoChat"/>
                {/* <h1 id="photonicLogo">Photonic</h1> */}
                
            <div className="header-icons">
                <SearchIcon
                    className="post-search"
                    alt={''}
                    src=""
                />
                <Avataricon
                    className="header-avatar"
                    alt={''}
                    src="/static/images/avatar/1.jpg"
                />
            </div>
        </div>
    )
}

export default LogoHeader