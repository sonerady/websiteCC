import React from 'react'

import { InfoContainer , InfoRow , InfoWrapper , Img , ImgWrap , TextWrapper , Collum1 , Collum2 , BtnWrap , Subtitle , Heading , TopLine } from './InfoElements'
import { Button } from '../ButtonElements'

const InfoSection = ({lightBg , id , imgStart , I,topLine , topLine2, headline , subtitle ,buttonLabel , lightText , darkText ,description , img , primary ,dark ,dark2 , alt , buttonurl}) => {
  return (
    <>
    <InfoContainer lightBg={lightBg} id={id} >

        <InfoWrapper>
            <InfoRow imgStart={imgStart}>
                <Collum1>
                    <TextWrapper>
                        <TopLine >{topLine}</TopLine>
                        <Heading lightText={lightText}>{headline}</Heading>
                        <TopLine >{topLine2}</TopLine>
                        <Subtitle darkText={darkText}>{subtitle}</Subtitle>
                        <BtnWrap>
                            <Button href={buttonurl} onClick={buttonurl} smooth={true} duration={500} spy={true} exact="true" offset={-80} primary={primary ? 1 : 0} dark={dark ? 1 : 0}  dark2={dark2 ? 1 : 0}>{buttonLabel}</Button>
                        </BtnWrap>
                   
                    </TextWrapper>
                </Collum1>
                <Collum2>
                <ImgWrap>
                <Img src={img} alt={alt}/>
                </ImgWrap>
                </Collum2>
            </InfoRow>
        </InfoWrapper>
    </InfoContainer>
    </>
  )
}

export default InfoSection;