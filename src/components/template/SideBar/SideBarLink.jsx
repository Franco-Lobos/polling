const SideBarLink = ({Icon, text,  active=0, dropSide})=>{

    return(
        <div className={`icon-link ${active ? 'active': 'unactive'}`}>
            <Icon/>
            {
                dropSide
                ?
                <h3>{text}</h3>
                :""
            }
        </div>
    );
}

export default SideBarLink;