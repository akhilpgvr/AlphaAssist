import React from 'react'
import './Body.css'

const Body = () => {
  return (
    <div className="body">

      <div className="question-section">
        <textarea style={{ width: '800px', height: '200px' }} class="form-control" aria-label="With textarea" placeholder='Ask your question here'></textarea>
      </div>

      <div className="submit-section">
        <button type="button" class="btn btn-primary btn-lg btn-block">Block level button</button>
      </div>

      <div className="answer-section">
        <textarea readOnly style={{ width: '800px', height: '300px' }} class="form-control" aria-label="With textarea" placeholder=''></textarea>
      </div>
    </div>
  )
}

export default Body
