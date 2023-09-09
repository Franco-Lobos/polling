import StyledLogo from "../StyledLogo";

import ProfileIcon from "./ProfileIcon";
import ConfigIcon from "./ConfigIcon";
import HomeIcon from "./HomeIcon";
import ResultsIcon from "./ResultsIcon";

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SideBarLink from "./SideBarLink";

import { Link, useLocation} from "react-router-dom";

import Switch from "./Switch";
import { useTheme } from "../../providers/theme/ThemeContext";

const SideBar = ()=>{

    const {dropSide, toggleSideBar} = useTheme();

    const options=[
        {name: "Home", element: HomeIcon, path:'/'},
        {name: "Results", element: ResultsIcon,  path:'/results'},
        {name: "Profile", element: ProfileIcon,  path:'/profile'},
        {name: "Settings", element: ConfigIcon,  path:'/settings'},
        // {name: "", element: LibraryAddIcon,  path:'/add'}
    ]

    const { pathname } = useLocation();
 
    return (
        <div id="sidebar">
            <div className="sidebar-logo-wraper" >
                <StyledLogo specialClass="sidebar-logo"/>
            </div>
            <div className={`sidebar-options ${dropSide ? '' : 'full-icon'}`} >
                
                <div id="create-pool">{dropSide ? '+ Create Pool' : '+'}</div> 
                    
                {options.map(el=>
                <Link to={el.path} key={el.path} >
                    <SideBarLink Icon={el.element} text={el.name} dropSide={dropSide} active={ el.path== pathname}></SideBarLink>
                </Link>
                )                
                }
                <div id="side-bar-toogler" onClick={toggleSideBar} className={`${dropSide ? 'sided': '' }`}>
                    <ArrowForwardIosIcon></ArrowForwardIosIcon>
                </div>
                <Switch showText={dropSide}/>
            </div>
        </div>
    )
}

export default SideBar;