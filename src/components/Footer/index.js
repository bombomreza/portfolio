import React from 'react'
import { animateScroll as scroll } from "react-scroll";
import { 
  FaCalendarAlt,
  FaGithub, 
  FaInstagram, 
  FaLinkedin, 
  FaPhoneSquareAlt, 
} from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg'
import { MdEmail, MdPlace } from 'react-icons/md'
import { FiDownload } from "react-icons/fi";
import { 
   FooterContainer,
   FooterWrap,
   SocialIconLink,
   FooterTitle,
   FooterWrapper,
   SocialIcons,
   FooterTransBox,
   TransBoxText,
   DataIcons,
   DataWrap,
   FooterBox,
   TextBox,
   FooterBox2,
   FooterTransBox2,
   SocialIconLink2,
  
} from "./FooterElements";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  }  

    return (
        <FooterContainer id="contact">
          <FooterWrap>
            <FooterTitle>Get in touch</FooterTitle>
            <FooterWrapper>
              <FooterTransBox>
                <DataWrap>
                  <DataIcons>
                    <CgProfile />
                  </DataIcons>
                  <TransBoxText>
                    Muhammad Reza Suherman
                  </TransBoxText>
                </DataWrap>
                <DataWrap>
                  <DataIcons>
                    <FaCalendarAlt/>
                  </DataIcons>
                  <TransBoxText>
                    June 1st 1996
                  </TransBoxText>
                </DataWrap>
                <DataWrap>
                  <DataIcons>
                    <MdEmail/>
                  </DataIcons>
                  <TransBoxText>
                    mrezas1616@gmail.com
                  </TransBoxText>
                </DataWrap>
                <DataWrap>
                  <DataIcons>
                    <FaPhoneSquareAlt/>
                  </DataIcons>
                  <TransBoxText>
                    +62 81214520383
                  </TransBoxText>
                </DataWrap>
                <DataWrap>
                  <DataIcons>
                    <MdPlace/>
                  </DataIcons>
                  <TransBoxText>
                    Bandung, Indonesia
                  </TransBoxText>
                </DataWrap>
              </FooterTransBox>
              <FooterTransBox2>
                <FooterBox>
                  <TextBox>
                    Visit me on!
                  </TextBox>
                  <SocialIcons>
                    <SocialIconLink href="https://github.com/bombomreza" target="_blank" aria-label="Facebook">
                      <FaGithub />
                    </SocialIconLink>
                    <SocialIconLink href="https://www.instagram.com/rezas_/" target="_blank" aria-label="Instagram">
                      <FaInstagram />
                    </SocialIconLink>
                    <SocialIconLink href="https://www.linkedin.com/in/mrezas16/" target="_blank" aria-label="Linkedin">
                      <FaLinkedin />
                    </SocialIconLink>                  
                  </SocialIcons>
                </FooterBox>
                <FooterBox2>
                  {/* <SocialIconLink2 href="https://www.linkedin.com/in/mrezas16/" target="_blank" aria-label="resume" >
                    View CV
                    <FiDownload/>
                  </SocialIconLink2> */}
                  <SocialIconLink2 href="https://drive.google.com/file/d/1bhr5nNayYKn9f552600H-QonxdQOZN-x/view" target="_blank" aria-label="resume" >
                  <DataIcons>
                    <FiDownload/>
                  </DataIcons>
                  <TransBoxText>
                    View Resume
                  </TransBoxText>
                </SocialIconLink2>
                </FooterBox2>
              </FooterTransBox2>
            </FooterWrapper>
            {/* <SocialMedia>
              <SocialMediaWrap>
                <SocialLogo>mrezas1616@gmail.com | +62 81214520383</SocialLogo>
                <WebsiteRight>Muhammad Reza Suherman</WebsiteRight>
                <SocialIcons>
                  <SocialIconLink href="https://github.com/bombomreza" target="_blank" aria-label="Facebook">
                    <FaGithub />
                  </SocialIconLink>
                  <SocialIconLink href="https://www.instagram.com/rezas_/" target="_blank" aria-label="Instagram">
                    <FaInstagram />
                  </SocialIconLink>
                  <SocialIconLink href="https://www.linkedin.com/in/mrezas16/" target="_blank" aria-label="Linkedin">
                    <FaLinkedin />
                  </SocialIconLink>
                </SocialIcons>
              </SocialMediaWrap>
            </SocialMedia> */}






            {/* <InfoWrapper1>
                <InfoRow>
                    <Column1>
                      <TopLine>Thanks for visiting!</TopLine>
                      <Heading> I hope we can work together</Heading>
                      <Subtitle></Subtitle>
                    </Column1>
                    <Column2>
                            <FooterLinkItems to="//google.com">
                                <FooterLink>
                                    <SocialIconLink a href="https://github.com/dbarochiya" target="_blank" aria-label="Email" rel="noopener noreferrer">
                                    <FaMailBulk/>
                                    </SocialIconLink>
                                mrezas1616@gmail.com</FooterLink>
                                <FooterLink to="https://google.com/">
                                    <SocialIconLink href="" target="_blank" aria-label="Instagram">
                                    <FaPhone/>
                                    </SocialIconLink>
                                +62 81214520383</FooterLink>  
                                <FooterLink to="https://github.com/bombomreza">
                                    <SocialIconLink href="https://github.com/dbarochiya" target="_blank" aria-label="Github">
                                    <FaGithub/>
                                    </SocialIconLink>
                                On Github</FooterLink> 
                                <FooterLink to="https://github.com/bombomreza">
                                    <SocialIconLink href="https://github.com/bombomreza" target="_blank" aria-label="LinkedIn">
                                    <FaLinkedin/>
                                    </SocialIconLink>
                                On LinkedIn</FooterLink> 
                                <FooterLink to="/">
                                    <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                                    <FaInstagram/>
                                    </SocialIconLink>
                                On Instagram</FooterLink>
                            </FooterLinkItems>   
                    </Column2>
                </InfoRow>
            </InfoWrapper1> */}
          </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
