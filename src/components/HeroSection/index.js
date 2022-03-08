import React , {useState} from 'react'
import { HeroContanier , HeroBg , VideoBg , HeroBtnWrapper , HeroContent , HeroH1 , HeroP , ArrowForward , ArrowRight } from './HeroElements'
import Video from '../../videos/video.mp4'
import { Button } from '../ButtonElements'
import MainPage from '../../pages/mainPage';
import Search from '../../pages/index';
const HeroSection = () => {

    const [hover , setHover] = useState(false)

    const onHover = () => {
        setHover=(!hover)
    }

  return (
    <HeroContanier >
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
            <HeroH1>
            Contract Checker
            </HeroH1>
            <HeroP>
            Our goal is to help eliminate Scam in the crypto space through our completely manual auditing services 
            </HeroP>
            <HeroP>
            ↓Check Pinksale links↓
            </HeroP>
            <HeroBtnWrapper>
                <Button onClick={<Search/>} href="/" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">Search{hover ? <ArrowForward /> : <ArrowRight/>}</Button>
            </HeroBtnWrapper>

            <HeroP>
            An Official Security Partner of Pinksale 
            </HeroP>
        </HeroContent>
    </HeroContanier>
  )
}

export default HeroSection