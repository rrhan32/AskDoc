import React, { useState , useEffect } from "react";
import './TextInput.css'; // Import your CSS file for styling (optional)
import QnAComponent from "./QnAComponent";
const TextInput = ({ onStateChange }) => {
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [questions,setQuestions]=useState([])
  const [answers,setAnswers]=useState(["Rohan","I am fine"])
  const [childState,setChildState]=useState({
    Questions:[],
    Answers:[],
  })

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    
  };
  const HandleClick=async()=>{
        if (inputValue){
         setChildState({
            ...childState,
        
            Questions:[...childState.Questions,inputValue],
            Answers:[...childState.Answers,'this is answer'],
           })
        }
        // onStateChange(childState);
        setInputValue('');
        

    try {
        const response=await fetch('http://localhost:3000/question',{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }, // Add Content-Type header
        body: JSON.stringify({text:inputValue}),  
    })

        setSuccessMessage("Question Sent Successfully");
        
        if (response.ok)
        {
          setQuestions([...questions,inputValue]);
          setAnswers([...answers,response]);

        }
        console.log(response);
        
    } catch (error) {
        setErrorMessage("error sending your question",error);
    } finally{
      setTimeout(()=>setErrorMessage(null),3000);
      setTimeout(()=>setSuccessMessage(null),3000);
    }

  };
  useEffect(() => {
    onStateChange(childState);
    console.log(childState);
  }, [childState, onStateChange]);

  return (
    <>
    <div className="questions-answers">
    {/* <QnAComponent questions={questions} answers={answers}/> */}
    </div>
    <div className="text-input-container">
      <label htmlFor="textInput">Enter Text:</label>
      <input
        type="text"
        id="textInput"
        className="text-input"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button type="submit" onClick={HandleClick}>Search</button>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      {successMessage  && <p>{successMessage}</p>}
    </div>
    </>
  );
}

export default TextInput;
