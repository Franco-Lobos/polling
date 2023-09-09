import { useTheme } from "../../providers/theme/ThemeContext";

import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'


const Switch = ({showText}) => {
  const {toggleTheme, theme} = useTheme();

  return (
    <div onClick={toggleTheme} className="header-icon-wraper"
    >
        {theme == "light" ? <LightModeIcon/> : <DarkModeIcon/>}
        {
                showText
                ?
                <h4> {theme} mode</h4>
                :""
            }
    </div>
  );
};

export default Switch;
