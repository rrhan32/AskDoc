import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PdfUploader from './utilities/pdfUploader'
import TextInput from './utilities/TextInput'
import Navbar from './utilities/Navbar'
import QnAComponent from './utilities/QnAComponent'

function App() {
  const [parentState, setParentState] = useState({});

  const handleStateChange = (value) => {
    setParentState(value);
  };

  return (
    <>
       <Navbar/>
       
       <PdfUploader/>
       <QnAComponent questions={parentState.Questions} answers={parentState.Answers}/>
       {/* <div>{parentState.Questions}</div> */}
       <div className="bottom">
       <TextInput onStateChange={handleStateChange}/>
       </div>
      
    </>
  )
}

export default App
