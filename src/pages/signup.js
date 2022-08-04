import React from 'react'
import SignUp from '../components/SignUp'

const SignUpPage = (props) => {
  return (
    <div>
      <SignUp setToken={props.setToken}/>
    </div>
  )
}

export default SignUpPage