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
} from './SignInElements'


const SignIn = (props) => {
  const height = window.innerHeight|| document.documentElement.clientHeight|| 
  document.body.clientHeight;

  const [email, setEmail] = useState()

  const [pass, setPass] = useState()

  const checkCreds = (email, pass) => {
    fetch('http://localhost:5000/login', {
      'method':'POST',
      'headers': {
      'Accept':'applitcation/json',
      'Content-Type':'application/json'
      },
      'body':JSON.stringify([email, pass])
    }).then(response => response.json())
    .then(data => {
      var email_input = document.getElementById("email");
      if (data === 'not ok') {
        email_input.setCustomValidity("Invalid email or password.")
      }
      else {
        email_input.setCustomValidity("")
        props.setToken(data.access_token)
      }
    });
  }

  const handleEmailChange = (event) => {
    checkCreds(event.target.value, pass)
    setEmail(event.target.value)
  }

  const handlePassChange = (event) => {
    checkCreds(email, event.target.value)
    setPass(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    window.parent.location = `/account`
  }

  return (
    <>
      <Container style={{"minHeight":height}}>
        <Icon to="/">Dereva</Icon>
        <FormWrap style={{"minHeight":height -160}}>
          <FormContent>
            <Form onSubmit={handleSubmit}>
              <FormH1>Sign in with your credentials. If you do not have an account, sign up below!</FormH1>
              <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput id='email' type='email' onChange={handleEmailChange} required />
              <FormLabel htmlFor='for'>Password</FormLabel> 
              <FormInput type='password' onChange={handlePassChange} required /> 
              <FormButton type="submit" value="Submit"
              >Sign In</FormButton>
              <TextLink to="/">Forgot password?</TextLink>
              <TextLink to="/signup">Sign up</TextLink>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default SignIn
