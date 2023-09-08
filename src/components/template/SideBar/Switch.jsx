import { useTheme } from "../../providers/theme/ThemeContext";

import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'


const Switch = ({icon}) => {
  const {toggleTheme, theme} = useTheme();

  return (
    <div onClick={toggleTheme} className="header-icon-wraper"
    // style={{justifyContent:`flex-${theme == "light" ? 'start':'end'}`}} 
    >
        {theme == "light" ? <LightModeIcon/> : <DarkModeIcon/>}
        <h4>{theme} mode</h4>
    </div>
  );
};

export default Switch;
