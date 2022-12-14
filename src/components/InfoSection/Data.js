import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-3.svg'


export const homeObjOne = {
  id: 'about',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'Premium Consulting',
  headLine: 'Upgrade your Business, Save Big',
  description: 'Work directly with developers to create fully integrated automated systems that will save your enterprise thousands.',
  buttonLabel: 'Learn More',
  destination: '/aboutus',
  imgStart: true,
  img: Icon1,
  alt: 'Car',
  dark: true,
  primary: true,
  darkText: false
}

export const homeObjTwo = {
  id: 'discover',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Maximum Efficiency',
  headLine: 'Optimize your Employee Productivity',
  description: 'Scale your business while streamlining employee workflow. Hand tailored automated solutions to suit your precise problems.',
  buttonLabel: 'Learn More',
  destination: '/howitworks',
  imgStart: false,
  img: Icon2,
  alt: 'Phone',
  dark: false,
  primary: false,
  darkText: true
}

export const homeObjThree = {
  id: 'signup',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Free Consultation',
  headLine: 'Meet with our Automation Specialist',
  description: 'Get started with a free consultation today to see how we can upgrade your company.',
  buttonLabel: 'Book Now',
  destination: '/booknow',
  imgStart: true,
  img: Icon3,
  alt: 'Car',
  dark: false,
  primary: false,
  darkText: true
}