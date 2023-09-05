import { Title, TitleSm } from "@/components/common/Title"
import Link from "next/link"
import React from "react"
import {AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai"
import { BiUserCircle } from "react-icons/bi"
import { BsFacebook } from "react-icons/bs"
import { FiHeadphones, FiHelpCircle } from "react-icons/fi"
import { IoLocationOutline } from "react-icons/io5"
import { useState } from "react"
import axios from "axios"


const Contact = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [submitted, setSubmitted] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errorElement = document.getElementById("error");
    const successElement = document.getElementById("successful");
  
    if (!name || !email || !message) {
      setSubmitted(false);
      errorElement.style.display = "block";
  
      setTimeout(() => {
        if (errorElement) {
          errorElement.style.display = "none";
        }
      }, 3000);
  
      return;
    }
  
    const data = {
      name,
      email,
      message,
    };
  
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      console.log(response);
  
      if (response.ok===true) {
        if (successElement) {
          successElement.style.display = "block";
          setTimeout(() => {
            if (successElement) {
              successElement.style.display = "none";
            }
          }, 2000);

          
        }
        const formElement = document.getElementById("contact-form");

        setSubmitted(true);
        // setName('');
        // setEmail('');
        // setMessage('');


      if (formElement) {
        setTimeout(() => {
          if (formElement) {
            formElement.reset();
          }
        }, 2000);
      }

      setTimeout(() => {
        window.location.reload();
      }, 2000);

      } else {
        console.log('Response failed');
        setSubmitted(false);
        // errorElement2.style.display = "block";      
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitted(false);
      // errorElement3.style.display = "block";
    }

  };


  return (
    <>
      <section className='contact bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='CONTACT' /> <br />
            <br />
            <Title title="Let's start right now!" className='title-bg' />
          </div>
          <div className='content py flex1'>
            <div className='left w-30'>
              <div className='contact-deatils'>
                <div className='box'>
                  <FiHeadphones size={30} className='icons' />
                  <h3>Teams Meeting</h3>
                  <span>Email us at info@niyadda.com for a free consultation via Teams</span>
                </div>
                <div className='box'>
                  <IoLocationOutline size={30} className='icons' />
                  <h3>International</h3>
                  <span>We operate digitally so we can help you wherever you are</span>
                </div>
                <div className='box'>
                  <FiHelpCircle size={30} className='icons' />
                  <h3>info@niyadda.com</h3>
                  <span>Drop us an email anytime!</span>
                </div>
              </div>
              <ul>
                <li className='icon'>
                  <a href="https://twitter.com/niyadda"> <AiFillTwitterCircle size={25} /> </a>
                  
                </li>
                <li className='icon'>
                  <a href="https://instagram.com/niyadda_agency"> <AiFillInstagram size={25} /> </a>
                </li>
                <li className='icon'>
                  <a href="https://linkedin.com/company/niyadda-digital-agency/"> <AiFillLinkedin size={25} /> </a>
                </li>
              </ul>
            </div>
            <div className='right w-70'>
              <TitleSm title='Make an online enquiry' />
              <p className='desc-p'>Got questions? Ideas? Fill out the form below to get our proposal. </p>

              <form id="contact-form" onSubmit={handleSubmit}>
                <div className='grid-2'>
                  <div className='inputs'>
                    <span>Name</span>
                    <input type="text" onChange={(e)=>{setName(e.target.value)}}/>
                  </div>
                  <div className='inputs'>
                    <span>Email</span>
                    <input type='email' onChange={(e)=>{setEmail(e.target.value)}}/>
                  </div>
                </div>
                <div className='inputs'>
                  <span>TELL US A BIT ABOUT YOUR PROJECT*</span>
                  <textarea cols='30' rows='10' onChange={(e)=>{setMessage(e.target.value)}}></textarea>
                </div>
                <button className="button-primary" type="submit">SUBMIT</button>
                <div className="message">
                  {submitted && <div className="successful" id="successful" style={{ marginTop: '2rem', color: 'white', animation: 'button .3s linear', textAlign: 'center', display: submitted ? 'block' : 'none' }}>Your message has been received!</div>}
                  {!submitted && <div className="error" id="error">Please fill out all fields</div>}
                  {!submitted && <div className="error" id="error2" >There was an error sending your message</div>}
                </div>
              </form>
            </div>
          </div>
        </div>

      </section>
    </>
  )
}

export default Contact