import React, { useState , useEffect } from 'react'
import PropTypes from 'prop-types';
import {
  Container,
  FormWrap,
  NavWrap,
  Icon,
  FormContent,
  Form,
  NavBtn
} from './AccountElements'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function allyProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


const Account = (props) => {
  const [value, setValue] = React.useState(0);

  const [ userData, setUserData ] = useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleLogout = () => {
    props.removeToken();
    window.parent.location = `/`;
  }

  useEffect(() => {
    fetch('http://localhost:5000/profile', {
      'method':'POST',
      'headers': {
      'Accept':'applitcation/json',
      'Content-Type':'application/json',
      'Authorization':'Bearer ' + props.token
    }}).then(response => (response.status === 200 ? (() => {
      console.log('hi')
      setUserData(response.data);
      props.setToken(response.data.access_token);
    }) : (() => {
      setUserData(null);
      window.parent.location=`/signin`
    })))
    .catch(error => console.log(error))
})

  return (
    <>
      <Container>
        <NavWrap>
          <Icon to="/">Dereva</Icon>
          <NavBtn onClick={handleLogout}>
            log Out
          </NavBtn>
        </NavWrap>
        <FormWrap>
          <FormContent>
            <Form>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" style={{"alignItems": "center"}}>
                <Tab label="Home" {...allyProps(0)} />
                <Tab label="Projects" {...allyProps(1)} />
                <Tab label="Payments" {...allyProps(2)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              Item One
            </TabPanel>
            <TabPanel value={value} index={1}>
              Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
              Item Three
            </TabPanel>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default Account

