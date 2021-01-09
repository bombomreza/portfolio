import React from 'react'
import Video from "../../videos/video.mp4";
import profilepicture from "../../images/me.jpg";
import { 
    HeroBg, 
    HeroContainer, 
    VideoBg, 
    InfoWrapper,
    Column1,
    Column2,
    TopLine,
    InfoRow,
    TextWrapper,
    Heading,
    ImgWrap,
    Img,
    ImgBorder
} from "./HeroElements";

const HeroSection = () => {

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <InfoWrapper>
                <InfoRow>
                    <Column1>
                        <TextWrapper>
                            <TopLine>Hi! I'm Reza</TopLine>
                            <Heading>Junior Web and Mobile Developer from Bandung, Indonesia</Heading>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgBorder>
                            <ImgWrap>
                                <Img src={profilepicture}  />
                            </ImgWrap>
                        </ImgBorder>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </HeroContainer>
    )
}

export default HeroSection
