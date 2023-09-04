
import { ThemeProvider } from './components/providers/theme/ThemeContext';
import { AlertProvider } from './components/providers/alert/alertContext';
import AlertModal from './components/providers/alert/AlertModal';
import { ScrollToTop } from './library';
import Main from './components/template/Main';


const App = ()=>{

  return(
    <ThemeProvider>
      <AlertProvider>          
          <Main></Main>
          {/* <AlertModal /> */}
      </AlertProvider>
    </ThemeProvider>
  )
}


export default App;
