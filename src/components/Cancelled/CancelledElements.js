import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(
    108deg,
    rgba(255, 211, 96, 1) 0%,
    rgba(255, 255, 221, 1) 100%
  );
`

export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-wdith: 400px) {
    height: 80%;
  }
`

export const Icon = styled(Link)`
  margin-left: 32px;
  margin-top: -32px;
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
  margin-top: 40px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 60px;

  @media screen and (max-wdith: 480px) {
    padding: 10px;
  }
`

export const Form = styled.form`
  background: #010101;
  max-width: 500px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  }
`

export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`

export const FormButton = styled(Link)`
  background: #ffd260;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  margin-top: 20px;
  cursor: pointer;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`