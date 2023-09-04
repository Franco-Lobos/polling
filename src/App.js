import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from  './components/template/Header';
import Footer from './components/template/Footer';
import Home from './components/pages/Home';

import { ThemeProvider } from './components/providers/theme/ThemeContext';
import { AlertProvider } from './components/providers/alert/alertContext';
import AlertModal from './components/providers/alert/AlertModal';
import { ScrollToTop } from './library';


const App = ()=>{

  return(
    <ThemeProvider>
    <AlertProvider>
      <BrowserRouter>
      <ScrollToTop></ScrollToTop>
      <Header></Header>

        <Routes>
            <Route path="/" element={<Home/>}/>
        </Routes>

      {/* <AlertModal /> */}
      <Footer></Footer>
      </BrowserRouter>
    </AlertProvider>
    </ThemeProvider>
  )
}


export default App;
