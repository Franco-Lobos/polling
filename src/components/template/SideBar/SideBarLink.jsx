const SideBarLink = ({Icon, text})=>{

    return(
        <div className="icon-link">
            <Icon/>
            <h3>{text}</h3>
        </div>
    );
}

export default SideBarLink;