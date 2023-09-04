import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Header = ()=>{
    return(
        <div id="header">          
            <div id="header-searcher">
                <input placeholder='Search'/>
            </div>
            <div id="header-user">
                <NotificationsIcon></NotificationsIcon>
                <div id="user-money">
                    $15
                </div>
                <div id="user-profle">
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