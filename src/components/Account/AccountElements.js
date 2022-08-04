import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  padding-bottom: 80px;
  width: 100%;
  height: 100vh;
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

export const NavWrap = styled.div`
  align-items: center;
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding-left: 32px;
  padding-top: 32px;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`

export const Icon = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 32px;
`

export const NavBtn = styled.button`
  align-items: right;
  display: flex;
  border-radius: 50px;
  background: #fff;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transiiton: all 0.2s ease-in-out;
  text-decoration: none;
  margin-right: 32px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #010606;
    color: #fff;
  }
`

export const FormContent = styled.div`
  height: 100%;
  width: 80%;
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
  width: 100%;
  height: 80%;
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
`

