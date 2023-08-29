import { Title, TitleSm } from "@/components/common/Title"
import Link from "next/link"
import React from "react"
import {AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai"
import { BiUserCircle } from "react-icons/bi"
import { BsFacebook } from "react-icons/bs"
import { FiHeadphones, FiHelpCircle } from "react-icons/fi"
import { IoLocationOutline } from "react-icons/io5"
import { useState } from "react"

const Contact = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [budget, setBudget] = useState("")
  const [timeframe, setTimeframe] = useState("")
  const [message, setMessage] = useState("")
  const [submitted, setSubmitted] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    let data = {
      name,
      email,
      budget,
      timeframe,
      message,
    }
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => {
      console.log('Response received')
      if (res.status === 200) {
        console.log('Response succeeded!')
        setSubmitted(true)
        setName('')
        setEmail('')
        setBudget('')
        setTimeframe('')
        setMessage('')
      }
    })
  }

 

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

              <form>
                <div className='grid-2'>
                  <div className='inputs'>
                    <span>Name</span>
                    <input type="text" onChange={(e)=>{setName(e.target.value)}}/>
                  </div>
                  <div className='inputs'>
                    <span>Email</span>
                    <input type='text' onChange={(e)=>{setEmail(e.target.value)}}/>
                  </div>
                </div>
                <div className='grid-2'>
                  <div className='inputs'>
                    <span>your budget</span>
                    <input type='text' onChange={(e)=>{setBudget(e.target.value)}}/>
                  </div>
                  <div className='inputs'>
                    <span>timeframe</span>
                    <input type='text' onChange={(e)=>{setTimeframe(e.target.value)}}/>
                  </div>
                </div>
                <div className='inputs'>
                  <span>TELL US A BIT ABOUT YOUR PROJECT*</span>
                  <textarea cols='30' rows='10' onChange={(e)=>{setMessage(e.target.value)}}></textarea>
                </div>
                <button className= 'button-primary' onClick={(e)=>{handleSubmit(e)}}>SUBMIT</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact