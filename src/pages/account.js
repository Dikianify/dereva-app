import React from 'react'
import Account from '../components/Account'

const AccountPage = (props) => {
  return (
    <div>
      <Account token={props.token} removeToken={props.removeToken}/>
    </div>
  )
}

export default AccountPage