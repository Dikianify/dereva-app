import React from 'react'
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  List,
  Text
} from './InfoElements'

const Info = () => {
  const height = window.innerHeight|| document.documentElement.clientHeight|| 
  document.body.clientHeight;
  return (
    <Container style={{"min-height":height}}>
      <Icon to="/">Intuit</Icon>
      <FormWrap style={{"min-height":height -160}}>
        <FormContent>
          <Form>
            <FormH1>How it Works</FormH1>
            <Text>The following guide will take you through the steps of the consultation process. These steps may be repeated at the same company if multiple processes are being altered.</Text>
            <List>
              <li><strong>Initial consultation</strong>: An automation specialist sits down with members of another organization to plan how their procedures may be automated.</li>
              <li><strong>Procedural Review</strong>: The specialist goes into the organization and learns the relevant procedures and determines how to hand tailor automated systems to fit the process.</li>
              <li><strong>Development</strong>: The specialist begins to develop and test the software. During this time the procedures are prepared for any changes that will have to be made.</li>
              <li><strong>System Rollout</strong>: The newly developed automated system is rolled out for the organization, fully integrating it into adapted procedures.</li>
              <li><strong>QA and upgrades</strong>: Over the short term, any bugs in the system will be identified and squashed. Any ways the system can be immediately expanded upon will also be explored.</li>
              <li><strong>Long-term Support</strong>: Customer support will be provided for all clients who have any comments, concerns, or questions about their specially designed systems.</li>
            </List>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  )
}

export default Info

