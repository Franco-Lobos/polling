const SideBarLink = ({Icon, text,  active=0})=>{

    return(
        <div className={`icon-link ${active ? 'active': ''}`}>
            <Icon/>
            <h3>{text}</h3>
        </div>
    );
}

export default SideBarLink;