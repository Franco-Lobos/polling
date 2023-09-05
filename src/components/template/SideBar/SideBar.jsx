import StyledLogo from "../StyledLogo";

import ProfileIcon from "./ProfileIcon";
import ConfigIcon from "./ConfigIcon";
import HomeIcon from "./HomeIcon";

import SideBarLink from "./SideBarLink";

import { Link, useLocation} from "react-router-dom";


const SideBar = ()=>{

    const options=[
        {name: "Home", element: HomeIcon, path:'/'},
        {name: "Profile", element: ProfileIcon,  path:'/profile'},
        {name: "Settings", element: ConfigIcon,  path:'/settings'}
    ]

    const { pathname } = useLocation();
 
    return (
        <div id="sidebar">
            <div className="sidebar-logo-wraper">
                <StyledLogo specialClass="sidebar-logo"/>
            </div>
            <div className="sidebar-options">
                {options.map(el=>
                <Link to={el.path} key={el.path} >
                    <SideBarLink Icon={el.element} text={el.name} active={ el.path== pathname}></SideBarLink>
                </Link>
                )
                
                }
            </div>
        </div>
    )
}

export default SideBar;