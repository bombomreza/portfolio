import React from 'react'
import Icon1 from '../../images/wdd.svg'
import Icon3 from '../../images/backend.svg'
import Icon2 from '../../images/react.svg'
import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesH2,
    ServicesCard,
    ServicesIcon,
    ServicesP,
    ServicesH3,
    Underline,
    TransBox,
    ServicesH4,
} from './ServicesElements'

const Services = () => {
    return (
        <ServicesContainer id="about">
            <TransBox>
                <ServicesH1>Call me Bombom, Nice to meet you.</ServicesH1>
                <ServicesH3> 
                I want to start my journey as web and mobile developer, i love exploring new technologies and interesting on programing language especially in web and mobile. As bachelor degree of engineering, i like challenging work that need analytical. I'm quietly confident, naturally curious, and positive mental attitude.
                </ServicesH3>        
            </TransBox>
            <ServicesH4>
                My Expertise
            </ServicesH4>
            <Underline/>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Web Development</ServicesH2>
                    <ServicesP>
                        Able clone and build webside with responsive, fast response and work across all devices using JavaScript, HTML, CSS & ReactJS.
                    </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Mobile Development</ServicesH2>
                    <ServicesP>
                        Able create mobile app with React Native, that can run on Android dan iOS, also able to be connected to REST API & Database. 
                    </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Back End</ServicesH2>
                    <ServicesP>
                        Build REST API and database for web app dan mobile app using Express JS, MySQL & MongoDB.
                    </ServicesP>
                </ServicesCard>
                
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
