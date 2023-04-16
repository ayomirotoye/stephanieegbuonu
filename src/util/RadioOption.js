import React from 'react'

function RadioOption({msg, name}) {
  return (
    <div className="optionDiv">
    <p>{msg}</p>
    <div>
      <label>
        <input
          type="radio"
          name={name}
          value="verygood"
        />
        <span></span>
      </label>
      <label>
        <input type="radio" name={name} value="good" />
        <span></span>
      </label>
      <label>
        <input type="radio" name={name} value="Fair" />
        <span></span>
      </label>
      <label>
        <input type="radio" name={name} value="Poor" />
        <span></span>
      </label>
      <label>
        <input
          type="radio"
          name={name}
          value="very poor"
        />
        <span></span>
      </label>
    </div>
  </div>
  )
}

export default RadioOption