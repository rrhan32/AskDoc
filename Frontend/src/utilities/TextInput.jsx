import React, { useState } from "react";

const TextInput = () => {
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const HandleClick=async()=>{
    try {
        const response=await fetch('http://localhost:3000/question',{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }, // Add Content-Type header
        body: JSON.stringify({text:inputValue}),
        
    })
        setSuccessMessage("Question Sent Successfully");
        console.log(response);
        
    } catch (error) {
        setErrorMessage("error sending your question",error);
    }
    
  }

  return (
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
  );
};

export default TextInput;
