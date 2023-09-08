import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import ModalUser from './ModalUser';
import { useState } from 'react';

const Header = ()=>{


    const [dropped, setDropped] = useState(0);

    const toggleDropped = ()=>{
        setDropped(!dropped);
    }

    const userSyle = {
        backgroundImage: `url(${require(`../../assets/profile.png`)})`,
    }


    return(
        <div id="header">    
            <div id="header-searcher">
                <input placeholder='Search'/>
            </div>
            <div></div>
            <div id="header-user">
                <div id="user-money">
                    $15
                </div>
                <div id="notification">
                    <NotificationsIcon >
                    </NotificationsIcon>
                    <div id="notification-alert">4</div>
                </div>
                

                <div id="user-profle">    
                    <div className={`dropper-triger  ${dropped ? 'dropped' : ''}`} onClick={toggleDropped}>    
                        <div id="user-image" style={userSyle}></div>
                        <div id="user-name"> Franklin </div> 
                        <ArrowDropDownIcon id={`${dropped ? 'droped': ''}`}></ArrowDropDownIcon>
                    </div> 
                    {
                        dropped
                        ?
                        <ModalUser></ModalUser>
                        :""
                    }
                </div>
               
            </div>
        </div>
    )
}


export default Header