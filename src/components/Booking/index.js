import React, { useState, useEffect } from 'react'
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
  CalendarWrapper,
  CalendarBook,
  TimesWrapper,
  TimesLabel
} from './BookingElements'
import BaseSelect from "react-select";
import FixRequiredSelect from "./FixRequiredSelect";


const Booking = () => {
  var oneYearFromNow = new Date();
oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);
  var today = new Date();
  var five_days = new Date(today.setDate(today.getDate() + 5));
  var start_date = new Date(five_days)

  if (start_date.getDay() === 6) {
    start_date = new Date(start_date.setDate(start_date.getDate() + 2));
  } else if (start_date.getDay() === 0) {
    start_date = new Date(start_date.setDate(start_date.getDate() + 1));
  }

  const [email, setEmail] = useState()

  const [date, setDate] = useState(start_date)

  const [options, setOptions] = useState()

  const [time, setTime] = useState(undefined)

  const handleInputChange = (event) => {
    setEmail(event.target.value)
  }

  const handleSelectChange = (value) => {
    setTime(value)
  }

  const handleCalendarChange = value => {
    setDate(value)
    setTime(undefined)
  }



  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:5000/post_appointment', {
      'method':'POST',
      'headers': {
      'Accept':'applitcation/json',
      'Content-Type':'application/json'
      },
      'body':JSON.stringify([email, date, time])
    }).then(response => window.parent.location = `/thankyou?date=${date}&time=${time.label}&email=${email}`);
  }

  useEffect(()=>{
    fetch('https://intuit-booking-api.herokuapp.com/get_times', {
      'method':'POST',
      'headers': {
      'Accept':'applitcation/json',
      'Content-Type':'application/json'
      },
      'body':JSON.stringify(date)
    })
    .then(response => response.json())
    .then(options => setOptions(options.options))
    .catch(error => console.log(error))
    },[date])

  const Select = props => (
    <FixRequiredSelect
      {...props}
      SelectComponent={BaseSelect}
      options={props.options || options}
    />
  );

  return (
    <>
      <Container>
        <Icon to="/">Dereva</Icon>
        <FormWrap>
          <FormContent>
            <Form onSubmit={handleSubmit}>
              <FormH1>Enter your email, then pick a date and time for your consultation</FormH1>
              <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput type='email' onChange={handleInputChange} required />
              <CalendarWrapper>
                <CalendarBook 
                  calendarType={"US"}
                  onChange={handleCalendarChange}
                  value={date}
                  minDate={new Date()}
                  maxDate={oneYearFromNow}
                  minDetail='year'
                  next2Label={null}
                  prev2Label={null}
                  tileDisabled={({date}) =>
                  date.getDay() === 6 ||
                  date.getDay() === 0 
                  || (date.getTime() - new Date().getTime()) / 86400000 < 4
                  }
                />
              </CalendarWrapper>
              <TimesWrapper>
                <TimesLabel>Select time:</TimesLabel>
                <div style={{width: '150px'}}>
                  <Select 
                    options={options}
                    value={time}
                    onChange={handleSelectChange}
                    required
                  />
                </div>
              </TimesWrapper>
              <FormButton type="submit" value="Submit"
              >Submit</FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default Booking
