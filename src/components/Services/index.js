import React from 'react'
import Icon1 from '../../images/UserFriendly.png';
import Icon2 from '../../images/PrivateKYC.png';
import Icon3 from '../../images/StartLaunch.png';
import Icon4 from '../../images/ContractDev.png';
import Icon5 from '../../images/ContractChecker.png';
import Icon6 from '../../images/Doxxed.png';
import{
    ServicesContanier,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP
} from './ServicesElements';
const Services = () => {
  return (
    <ServicesContanier id="services">
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1} />
                <ServicesH2>User Friendly</ServicesH2>
                <ServicesP>Our stylish, light and easy-to-read project audits review the code, team, website and social media and come with a Clean Certificate.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2} />
                <ServicesH2 >Private Doxxing (KYC)</ServicesH2>
                <ServicesP>Know Your Customer (KYC) standards are designed to protect the crypto industry against fraud, corruption, money laundering and much more.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3} />
                <ServicesH2>Token Launch Consulting</ServicesH2>
                <ServicesP>Have an idea for a project and can't figure out how to launch it ? Our experts will guide you through the entire process from idea to success!</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon4} />
                <ServicesH2>Contract Development</ServicesH2>
                <ServicesP>We have a dedicated team who can develop Smart Contract for your project.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon5} />
                <ServicesH2>ContractChecker</ServicesH2>
                <ServicesP>We care investors and we want to eliminate Scam, that's why we develop a mobile application for investors to check by CA if the contract is Safe or not.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon6} />
                <ServicesH2>Doxxed Team by Pinksale</ServicesH2>
                <ServicesP>Because we are for Legit and Safu projects our team is Doxxed and KYCed with Pinksale.</ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContanier>
  )
}

export default Services