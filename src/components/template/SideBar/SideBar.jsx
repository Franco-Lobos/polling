import StyledLogo from "../StyledLogo";

import ProfileIcon from "./ProfileIcon";
import ConfigIcon from "./ConfigIcon";
import HomeIcon from "./HomeIcon";

import SideBarLink from "./SideBarLink";

const SideBar = ()=>{

    const options=[
        {name: "Home", element: HomeIcon},
        {name: "Profile", element: ProfileIcon},
        {name: "Settings", element: ConfigIcon}
    ]

    return (
        <div id="sidebar">
            <StyledLogo specialClass="sidebar-logo"/>
            <div className="sidebar-options">
                {options.map((el, indx)=>
                <SideBarLink key={indx} Icon={el.element} text={el.name}></SideBarLink>
                )
                
                }
            </div>
        </div>
    )
}

export default SideBar;