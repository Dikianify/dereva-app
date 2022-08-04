import React from 'react'
import SignIn from '../components/SignIn'

const SignInPage = (props) => {
  return (
    <div>
      <SignIn setToken={props.setToken}/>
    </div>
  )
}

export default SignInPage