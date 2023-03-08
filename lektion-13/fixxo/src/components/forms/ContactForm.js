import React, { useState } from 'react'

const ContactForm = () => {
  const [name, setName] = useState('')
  const [nameError, setNameError] = useState('')
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [comments, setComments] = useState('')
  const [commentsError, setCommentsError] = useState('')

  const validateName = (value) => {
    if (value.length < 2)
      setNameError('Your name must be valid')
    else
      setNameError('')
  }

  const validateEmail = (value) => {
    const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regEx.test(value))
      setEmailError('Your email must be valid')
    else
      setEmailError('')
  }

  const validateComments = (value) => {
    if (value.length < 5)
      setCommentsError('Your comment must be at least 5 characters long.')
    else
      setCommentsError('')
  }

  const onChangeHandler = (e) => {
    switch(e.target.id) {
      case 'name':
        setName(e.target.value)
        validateName(e.target.value)
        break;

      case 'email':
        setEmail(e.target.value)
        validateEmail(e.target.value)
        break;

      case 'comments':
        setComments(e.target.value)
        validateComments(e.target.value)
        break;
    }
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault()

    if (name.length > 0 && email.length > 0 && comments.length > 0) {
      if (nameError.length == 0 || emailError.length == 0 || commentsError.length == 0) {
        
        const contactForm = {
          name: name,
          email: email,
          comments: comments
        }

        const res = await fetch('https://kyh-net22.azurewebsites.net/api/contacts', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(contactForm)
        })

        if (res.status === 200) {
          console.log('förfrågan har skickats.')
          setName('')
          setEmail('')
          setComments('')
        }
      } 
    }
  }


  return (
    <section className="contact-form">
        <div className="container">
            <h1>Come in Contact with Us</h1>
            <form onSubmit={onSubmitHandler} noValidate>
                <div className="contact-form-name">
                    <input id="name" type="text" placeholder="Your Name" value={name} onChange={onChangeHandler} />
                    <div className="error">{nameError}</div>
                </div>
                <div className="contact-form-email">
                    <input id="email" type="email" placeholder="Your Mail" value={email} onChange={onChangeHandler} />
                    <div className="error">{emailError}</div>
                </div>
                <div className="contact-form-comments">
                    <textarea id="comments" placeholder="Comments" value={comments} onChange={onChangeHandler}></textarea>
                    <div className="error">{commentsError}</div>
                </div>
                
                <button className="btn-theme" type="submit">Post Comments</button>
            </form>
        </div>
    </section>
  )
}

export default ContactForm