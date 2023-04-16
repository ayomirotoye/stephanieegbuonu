import React from 'react'
import styled from 'styled-components'

function Feedback() {
  return (
    <div>
        <Form>
            <h1>Customer Feedback</h1>
            <p>Have you got valuable feebacks about our products? We'd definitely love to hear it!</p>

            <form id="form" className="flex flex-col">
              <label htmlFor="name">Name <span id="asterisk">*</span></label>
              <input type="text" name="name" id="name" />
              <label htmlFor="email">Email <span id="asterisk">*</span></label>
              <input type="email" name="email" id="email" />
              <label htmlFor="message">Message <span id="asterisk">*</span></label>
              <textarea id="message" rows="5">Write your message...</textarea>
              <button type="submit" className="btn">Submit Feedback</button>
            </form>
        </Form>
    </div>
  )
}

export default Feedback

const Form = styled.div`
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80vw;
    height: 80vh;
    margin: 2em auto;
    display: flex;
    border: 1px solid #e9ecef;
    border-radius: 15px;
    box-shadow: 1px 3px 10px #e9ecef;
    background-color: white;

    #form {
      max-width: 720px;
      width: 100vw;
      margin: 2em auto;
    }

    #asterisk {
      color: red;
    }
  
    #form > input, textarea,
    .btn {
      border: 1px solid #e9ecef;
      border-radius: 7px;
      padding: 0.9em 1em;
    }
  
    #form > input:focus {
      outline: none;
    }
  
    #form > .btn {
      background-color: rgb(50, 101, 116);
      color: #e9ecef;
      font-size: 1em;
      cursor: pointer;
      width: 200px;
      margin-top: 1em;
    }
  
    .flex {
      display: flex;
      gap: 1em;
    }
  
    .flex-col {
      flex-direction: column;
    }
  
    .register .col-1 {
      margin: auto;
      padding: 3em 0;
    }
  
    .register .col-2 img {
      width: 480px;
      height: 100%;
      object-fit: cover;
      align-self: flex-end;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      display: none;
    }
  
    @media screen and (min-width: 760px) {
      .register .col-2 img {
        display: initial;
      }
    }

    @media screen and (max-width: 760px) {
      width: 90%;
      height: 100%;
      margin: 2em 1em;

      h1{
        font-size: 25px;
      }

      p{
        max-width: 300px;
        width: 100vw;
        margin: 2em auto;
        font-size: 15px;
      }

      #form {
        max-width: 300px;
        width: 100vw;
        margin: 2em auto;
      }

      #form > .btn {
        background-color: rgb(50, 101, 116);
        color: #e9ecef;
        font-size: 13px;
        cursor: pointer;
        width: 150px;
        margin-top: 1em;
      }
    }
`