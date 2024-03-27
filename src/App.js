import logo from './logo.svg';
import './App.css';

import ReactSwitch from 'react-switch';
import { useThemeContext } from './context/ThemeContext';
import { useState } from 'react';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';

function App() {
  const {contextTheme, setContextTheme} = useThemeContext()
  const [checked, setChecked] = useState(false);

  const handleSwitch = (nextChecked) => {       
    setContextTheme((state) => (state === 'Light' ? 'Dark':'Light'))       
    setChecked(nextChecked);
    //console.log(nextChecked)
  }
   
  return (
    <div className="App">      
      <header className="App-header" id={contextTheme} > 
      <ReactSwitch 
          onChange={handleSwitch}
          checked={checked}
          onColor="#86d3ff"
          onHandleColor="#2693e6"
          handleDiameter={30}
          uncheckedIcon={false}
          checkedIcon={false}
          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
          activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
          height={20}
          width={48}
          className="react-switch"
          id="material-switch"
        /> 
        <h2>{contextTheme} Mode</h2>
        <img src={logo} className="App-logo" alt="logo" />                  
        <Routes>
          <Route path="/" element={<Layout/>} >
            <Route index element={ <Home /> } />
            <Route path="about" element={<About />} />  
            <Route path="contact" element={<Contact />} />
          </Route>                    
        </Routes>
      </header>
    </div>
  );
}
   
export default App;