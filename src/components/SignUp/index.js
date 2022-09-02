import React, { useState } from 'react'
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  TextLink
} from './SignUpElements'


const SignUp = (props) => {
  const height = window.innerHeight|| document.documentElement.clientHeight|| 
  document.body.clientHeight;

  const [email, setEmail] = useState()

  const [pass, setPass] = useState()

  const [confPass, setConfPass] = useState()

  const [name, setName] = useState()

  const [company, setCompany] = useState()

  const sign_in = (email_input, data) => {
    email_input.setCustomValidity("")
    localStorage.setItem('token', data.access_token)
  }


  const handleEmailChange = (event) => {
    setEmail(event.target.value)
    fetch('http://localhost:5000/check_email', {
      'method':'POST',
      'headers': {
      'Accept':'applitcation/json',
      'Content-Type':'application/json'
      },
      'body':JSON.stringify(event.target.value)
    }).then(response => response.json())
      .then(data => {
        var email_input = document.getElementById("email");
        (data === 'not ok' ? email_input.setCustomValidity("This email is already in use.") :
        sign_in(email_input, data))
      })
    }

  const handlePassChange = (event) => {
    setPass(event.target.value)
    var pass_input = document.getElementById("pass");
    (confPass === event.target.value ? pass_input.setCustomValidity("") : 
    pass_input.setCustomValidity("Passwords must match."));
  }

  const handleConfirmPassChange = (event) => {
    setConfPass(event.target.value)
    var pass_input = document.getElementById("pass");
    (pass === event.target.value ? pass_input.setCustomValidity("") : 
      pass_input.setCustomValidity("Passwords must match."));
    }

  const handleNameChange = (event) => {
    setName(event.target.value)
  }

  const handleCompanyChange = (event) => {
    setCompany(event.target.value)
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:5000/create_account', {
      'method':'POST',
      'headers': {
      'Accept':'applitcation/json',
      'Content-Type':'application/json'
      },
      'body':JSON.stringify([email, pass, name, company])
    }).then(response => response.json())
    .then(data => {
    props.setToken(data.access_token);
    window.parent.location = `/account`;})
  }

  return (
    <>
      <Container style={{"minHeight":height}}>
        <Icon to="/">Dereva</Icon>
        <FormWrap style={{"minHeight":height -160}}>
          <FormContent>
            <Form onSubmit={handleSubmit} id="myform">
              <FormH1>Sign up with your email and a secure password!</FormH1>
              <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput id='email' type='email' onChange={handleEmailChange} required />
              <FormLabel htmlFor='for'>Password</FormLabel> 
              <FormInput type='password' onInput={handlePassChange} required />
              <FormLabel htmlFor='for'>Confirm password</FormLabel> 
              <FormInput id='pass' type='password' onInput={handleConfirmPassChange} required />
              <FormLabel htmlFor='for'>Name (optional)</FormLabel> 
              <FormInput type='text' onInput={handleNameChange} /> 
              <FormLabel htmlFor='for'>Company (optional)</FormLabel> 
              <FormInput type='text' onInput={handleCompanyChange} /> 
              <FormButton type="submit" value="Submit"
              >Create Account</FormButton>
              <TextLink to="/signin">Already have an account? Sign in here.</TextLink>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default SignUp
