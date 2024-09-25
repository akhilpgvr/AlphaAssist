import React, { useState } from 'react'
import './Body.css'

const Body = () => {

  const[question, setQuestion] = useState('');

  const onChangeSetQUestion = async (event) => {
    setQuestion(event.target.value)
  };
  const onSubmit = async (event) => {
  
    console.log(question)
  };

  return (
    <div className="body">
      <div className="question-section">
        <textarea onChange={onChangeSetQUestion} style={{ width: '800px', height: '200px' }} class="form-control" aria-label="With textarea" placeholder='Ask your question here'></textarea>
      </div>

      <div className="submit-section">
        <button onClick={onSubmit} type='submit' className="submit">Ask AlphaAssist</button>
      </div>

      <div className="answer-section">
        <textarea readOnly style={{ width: '800px', height: '300px' }} class="form-control" aria-label="With textarea" placeholder=''></textarea>
      </div>
    </div>
  )
}

export default Body
