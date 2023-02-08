import InformationContext from '../context/information/InformationContext';
import React,{ useContext,useState,useRef } from 'react';
import emailjs from '@emailjs/browser';

const AddInformation = () => {
const form = useRef()
const Context = useContext(InformationContext);
const {AddInformation} = Context;
const [Information,setInformation] = useState({name:"",email:"",subject:""})

const ClickHandler=(e)=>{
    e.preventDefault();
    AddInformation(Information.name,Information.email,Information.subject);
}

const OnChange=(e)=>{
setInformation({...Information,[e.target.name]:e.target.value})
}

const SendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm("service_s9q2yb4", 'template_6ei2cee', form.current, 'xHxhiKtCLjL32kyxH')
    .then((result) => {
        console.log(result.text);
        alert('Email Sent Successfully')
    }, (error) => {
        console.log(error.text);
        alert('Email Not Sent Successfully')
    });
    e.target.reset()
};
  

  return (
    <div className="container">
      <h2><i>Book an Appointment</i></h2>
<form ref={form} onSubmit={SendEmail}>
  
  Name : <input type="text" className="form-control" id="name" name="name" placeholder="Enter username"  required onChange={OnChange}/><br></br>
  Email  : <input type="text" className="form-control" id="email" name= "email" placeholder="Enter email address"  required onChange={OnChange}/><br></br>
  Subject : <input type="text" className="form-control" id="subject" name="subject" placeholder="Subject"  size="50" required onChange={OnChange}/><br></br>
  Message : <textarea type="text" className="form-control" id="message" name="message" placeholder="message"  size="50" required onChange={OnChange}/><br></br>

  Appointment Date
  <br></br>
  <input style={{fontSize:'18px',color:'red'}} type="datetime-local" id="date" name="date"/>
  <button type="submit" className="btn btn-danger" onClick={ClickHandler}>Submit</button>
  <button type="submit" className="btn btn-danger" >Send Email</button>
</form>
    </div>
  )
}

export default AddInformation
