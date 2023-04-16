import React from "react";
import styled from "styled-components";
import RadioOption from "../util/RadioOption";

function Feedback() {
  return (
    <Container>
      <Form>
        <h1>Customer Feedback Form</h1>
        <p style={{padding: '2%', lineHeight:'1.6'}}>
          Please take a few minutes to give us feedback about our services by
          filling this short customer feedback form.{''} We are conducting this
          research in order to measure youre level of satisfaction with the
          quality of our services. We thank you for your participation.{" "}
        </p>
        <div className="borderline"></div>

        <h2>Overall experience with our services</h2>
        <div className="rating">
          <p></p>
          <div>
            <h3>Very Good</h3>
            <h3>Good</h3>
            <h3>Fair</h3>
            <h3>Poor</h3>
            <h3>Very Poor</h3>
          </div>
        </div>
        <form action="" id="form" className="flex flex-col">
          <RadioOption msg={'How would you rate your overall experince with our services?'} name={'overall experience'}/>
          <div className="borderline"></div>
          <RadioOption msg={'How would you rate the speed of our service delivery?'} name={'service delivery time'}/>
          <div className="borderline"></div>
          <RadioOption msg={'How would you rate our prices?'} name={'Prices'}/>
          <div className="borderline"></div>
          <RadioOption msg={'How satisfied are you with the timelessness of our services?'} name={'timelessness'}/>
          <div className="borderline"></div>
          <RadioOption msg={'How satisfied were you with our customer support?'} name={'customer support'}/>
          <div className="borderline"></div>
          <RadioOption msg={'would you recommend our products / service to other people?'}/>
          <div className="borderline"></div>
          <label htmlFor="message" style={{textAlign:'start'}}>
            Message <span id="asterisk">*</span>
          </label >
          <textarea
            id="message"
            rows="5"
            placeholder="We'd love to hear your suggestions..."
          ></textarea>
          <label htmlFor="name" style={{textAlign:'start'}}>
            Name <span id="asterisk">*</span>
          </label>
          <input type="text" name="name" id="name" />
          <label htmlFor="email" style={{textAlign:'start'}}>
            Email(optional) <span id="asterisk">*</span>
          </label>
          <input type="email" name="email" id="email" />
          <button type="submit" className="btn">
            Submit Feedback
          </button>
        </form>
      </Form>
    </Container>
  );
}

export default Feedback;
const Container = styled.div`
  height: 100vh;
  display: grid;
  align-items: center;
  justify-content: center;

  
  `;
const Form = styled.div`
  h3 {
    padding: 0;
    margin: 0;
    font-size: 1rem;
    color: rgb(50, 101, 116);
  }
  h1{
    text-align: center;
    color: rgb(50, 101, 116);
  }
  h2{
    color: rgb(50, 101, 116);
    text-align: center;
    margin: 4% 0;
  }
  p{
    line-height: 1.2;
    padding: 1%;
  }
  .borderline{
    width: 100%;
    height: 1px;
    background-color: rgb(50, 101, 116);
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 65vw;
  margin: 2em auto;
  border: 1px solid #e9ecef;
  border-radius: 15px;
  box-shadow: 1px 3px 10px #e9ecef;
  background-color: white;

  #form {
    width: 80%;
    padding: 2em;
  }

  #asterisk {
    color: red;
  }

  #form > input,
  textarea,
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
  .rating {
    display: none;
    width: 80%;

  }
  .rating div {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  .rating > h3 {
    padding: 0;
    margin: 0;
    font-size: 1rem;
  }
  .optionDiv {
    margin-bottom: 2%;
  }
  .optionDiv > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  input[type="radio"] {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  .optionDiv > div > label {
   
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .optionDiv > div > label > span {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #ffffff;
    border-radius: 50%;
  }
  .optionDiv > div > label > span:hover,
  input[type="radio"]:checked + span:hover {
    background-color: #ffffff;
  }
  .optionDiv > div > label > span::before {
    content: "";
    width: 25px;
    display: inline-block;
    height: 25px;
    border-radius: 50%;
    transition: 0.25 ease;
    box-shadow: inset 0 0 0 2px rgb(50, 101, 116);
  }
  input[type="radio"]:checked + span:before {
    box-shadow: inset 0 0 0 7px rgb(50, 101, 116);
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
  #form > .btn {
      background-color: rgb(50, 101, 116);
      color: #e9ecef;
      font-size: 13px;
      cursor: pointer;
      width: 150px;
      margin-top: 1em;
    } 

  

  
  @media screen and (min-width: 641px){
    .optionDiv {
    display: grid;
    grid-template-columns: 30% 70%;
    
  }
  .rating {
    display: none;
    width: 80%;
    display: grid;
    grid-template-columns: 30% 70%;

  }

  }
`;
