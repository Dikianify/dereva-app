import React, { useEffect } from 'react'
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormButton,
} from './CancelledElements'


const Cancelled = () => {
  var height = window.innerHeight|| document.documentElement.clientHeight|| 
  document.body.clientHeight;

  useEffect(() => {
    const url = window.location.href
    const email=url.slice(url.indexOf("email=") + 6)
    fetch('https://intuit-booking-api.herokuapp.com/cancel_booking', {
      'method':'POST',
      'headers': {
      'Accept':'applitcation/json',
      'Content-Type':'application/json'
      },
      'body':JSON.stringify(email)
    })
  }, [])

  return (
    <>
    <Container style={{"minHeight":height}}>
      <Icon to="/">Intuit</Icon>
      <FormWrap style={{"minHeight":height -160}}>
        <FormContent>
          <Form action="#">
            <FormH1>You have successfully cancelled your booking. You may reschedule at any time.</FormH1>
            <FormH1>Hope to talk to you soon!</FormH1>
            <FormButton to='/'>Return to Homepage</FormButton>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
    </>
  )
}

export default Cancelled
