import PersonIcon from '@mui/icons-material/Person';
import EditIcon from '@mui/icons-material/Edit';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import LogoutIcon from '@mui/icons-material/Logout';

const ModalUser = ()=>{

    return (
        <div id={'modal-user'}>
            <div className='option'> <PersonIcon/> <h4>Personal info</h4></div>
            <div className='option'> <EditIcon/><h4> Edit profile</h4></div>
            <div className='option'> <DashboardCustomizeIcon/><h4>Dashboard customize</h4></div>
            <div className='option'> <LogoutIcon/> <h4>Log Out</h4></div>
        </div>
    )
}

export default ModalUser;