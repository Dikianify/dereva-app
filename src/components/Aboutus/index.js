import React from 'react'
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  Text
} from './AboutusElements'

const Aboutus = () => {

  return (
    <>
      <Container>
        <Icon to="/">Intuit</Icon>
        <FormWrap>
          <FormContent>
            <Form>
              <FormH1>Who We Are</FormH1>
              <br />
              <Text>Intuit Automation was founded in January 2022 by James Rogers. Previously, James had experience at Commonwealth Diagnostics International where he gained hands on experience completely or partially automating multiple processes. These processes ranged from formatting excel files, updating and entering data into SQL databases, sending and receiving faxes, and much more!</Text>
              <Text>The goal of Intuit Automation is to unlock the potential of companies by alleviating some tasks that could be automated from their workforce. Not only are these potentially automatable tasks often times very mundane and repetitive, but also restrict scalability of a corporation as their burden grows with it. As this burden is lifted, new opportunities thrive.</Text>
              <Text>Intuit Automation seeks to become a leader in the automation consultation space. We know that this would be impossible without our clients. That's why we strive to consitently deliver products that will not only amaze, but inspire innovation. Together, the workplace will be forever changed and everyone made better off.</Text>
              <br/>
              <Text>James Rogers</Text>
              <Text>CEO and Lead Developer</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default Aboutus

