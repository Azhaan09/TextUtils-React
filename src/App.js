import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/alert';

function App() {
  const [mode, setMode] = useState('light');//whether dark mode enable or not;
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
        setAlert(null);
    }, 1500);
  }
  const toggleMode = () =>{
   if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = '#274d63';
    document.body.style.color = 'white';
    showAlert("Dark mode has been enabled", "success");
   // document.title ="TextUtils - Dark Mode";
    
  }
    else{
     setMode('light');
     document.body.style.backgroundColor = 'white';
     document.body.style.color = 'black';
     showAlert("Light mode has been enabled", "success");
     //document.title = "TextUtils - Light Mode";
     
   }
  }
  return (
    <>
    <Navbar title = "TextUtils" mode = {mode} toggleMode = {toggleMode} AboutText = "About Text"/>
    <Alert alert={alert}/>
    <div className='container my-3' >
          <TextForm showAlert={showAlert} heading = "Enter the text to Analyz"/>     
    </div> 
   
    
    </>
  );
}

export default App;
