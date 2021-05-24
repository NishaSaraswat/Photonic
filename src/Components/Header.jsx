import React from 'react'
import Logo from '../CommonCss/icons/LogoChat.png'
import Group2 from '../CommonCss/icons/Group2.png'

function Header() {
    return (
        <div className="header">
        <img src={Group2} alt="group2" id="group2"></img>
        <img src={Logo} alt="logo" id="logo">
        </img>
        <span>Share Photos & Chat</span>
            
        </div>
    )
}

export default Header
