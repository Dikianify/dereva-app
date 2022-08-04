import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  padding-bottom: 80px;
  display: flex;
  flex-direction: column;
  background: linear-gradient(
    108deg,
    rgba(255, 211, 96, 1) 0%,
    rgba(255, 255, 221, 1) 100%
  );
`

export const FormWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Icon = styled(Link)`
  margin-left: 32px;
  margin-top: 32px;
  width: 11%;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 32px;

  @media screen and (max-wdith: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`

export const FormContent = styled.div`
  height: 100%;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`

export const Form = styled.form`
  background: #fff;
  width: 80%;
  min-height: 80%;
  max-width: 1200px;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 50px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  }
`

export const FormH1 = styled.h1`
  color: #010101;
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  font-weight: 600;
`

export const Text = styled.span`
  text-align: center;
  margin-left: 4%;
  max-width: 90%;
  color: #010101;
  font-size: 16px;
  margin-bottom: 10px;
  font-style: italic;
`

export const List = styled.ul`
  list-style-type: upper-roman;
  justify-content: center;
  margin-left: 10%;
  display: grid;
  max-width: 80%;
  
`