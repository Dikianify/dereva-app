import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import { HeroContainer,  HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, Button, ArrowForward, ArrowRight } from './HeroElements'

const HeroSection = () => {
  const [hover, setHover] = useState(false)

  const [fade, setFade] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  const onVideoEnd = () => {
    setFade(!fade)
  }


  return (
    <HeroContainer id="home" style={{height:window.screen.height}}>
      <HeroBg>
        <VideoBg autoPlay muted src={Video} onEnded={() => onVideoEnd()} type='video/mp4' />
      </HeroBg>
      <HeroContent fade={fade}>
        <HeroH1>Automation made intuitive</HeroH1>
        <HeroP>Sign up for a free online consultation today.</HeroP>
        <HeroBtnWrapper>
          <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover}
          primary='true' dark='true'
          smooth={true} 
          duration={500} 
          spy={true} 
          exact='true' 
          offset={-79}>
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
