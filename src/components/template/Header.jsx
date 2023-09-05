import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import StyledLogo from './StyledLogo';
const Header = ()=>{
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
                <div id="user-profle">              
                    <NotificationsIcon></NotificationsIcon>
                    <PersonIcon></PersonIcon>
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