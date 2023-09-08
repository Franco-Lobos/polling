import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


const Header = ()=>{

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
                <NotificationsIcon></NotificationsIcon>

                <div id="user-profle">              
                    <div id="user-image" style={userSyle} ></div>
                    <div id="user-name">
                        Peter
                    </div>
                    <ArrowDropDownIcon></ArrowDropDownIcon>
                </div>
            </div>
        </div>
    )
}


export default Header