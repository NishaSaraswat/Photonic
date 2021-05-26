import React from 'react'

const HomePage = () => {
    return (
        <div className="Main">
           
            <div className="Main-header">
                <img 
                    className="Main_logo-meetDev"
                    src={Logo} 
                    alt="logo-meetDev"
                />
            </div>
            
            <Post/>
            <Photos/>

        </div>
    )
}

export default HomePage
