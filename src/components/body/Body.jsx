import React, { useState } from 'react'
import './Body.css'

const Body = () => {

  const[question, setQuestion] = useState('');
  const[response, setResponse] = useState('');

  const onChangeSetQUestion = async (event) => {
    setQuestion(event.target.value)
  };

  const onSubmit = async () => {
    try {
      console.log(question);
      const result = await fetch('http://localhost:9980/alpha-assist/v1/connect/ask-alpha', {
        method: 'POST',
        headers: {
          'accept': '*/*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "contents": [
            {
              "parts": [
                {
                  "text": question
                }
              ]
            }
          ]
        })
      });
      const data = await result.json(); // Convert response to JSON
      setResponse(data.resultText.text); // Save the response in the state
      console.log(response);
    } catch (error) {
      console.error('Error calling API:', error);
    }
  };
  
  
  

  return (
    <div className="body">
      <div className="question-section">
        <textarea onChange={onChangeSetQUestion} style={{ width: '1050px', height: '250px' }} class="form-control" aria-label="With textarea" placeholder='Ask your question here'></textarea>
      </div>

      <div className="submit-section">
        <button onClick={onSubmit} type='submit' className="submit">Ask AlphaAssist</button>
      </div>

      <div className="answer-section">
        <textarea value={response} readOnly style={{ width: '1050px', height: '350px' }} class="form-control" aria-label="With textarea" placeholder=''></textarea>
      </div>
    </div>
  )
}

export default Body
