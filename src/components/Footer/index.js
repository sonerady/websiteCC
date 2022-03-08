import React from 'react'
import {animateScroll as scroll} from 'react-scroll'
import { 
    FaFacebook, 
    FaInstagram, 
    FaYoutube, 
    FaTwitter, 
    FaLinkedin 
} from 'react-icons/fa';

import { 
    FooterContanier,
    FooterWrap,
    FooterLinksContanier,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconsLink 
} from './FooterElements';

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
      }

  return (
    <FooterContanier>
        <FooterWrap>
            {/* <FooterLinksContanier>
                 <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle> About Us </FooterLinkTitle>
                            <FooterLink to="/signin">Sign In</FooterLink>
                            
                        
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle> About Us </FooterLinkTitle>
                            <FooterLink to="/signin">Sign In</FooterLink>
                            
                        
                    </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle> About Us </FooterLinkTitle>
                            <FooterLink to="/signin">Sign In</FooterLink>
                            
                        
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle> About Us </FooterLinkTitle>
                            <FooterLink to="/signin">Sign In</FooterLink>
                            
                        
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContanier> */}
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/' onClick={toggleHome}>
                        CChecker
                    </SocialLogo>
                    <WebsiteRights>CChecker € {new Date().getFullYear()}
                    All right reserved.</WebsiteRights>
                    <SocialIcons>
                        <SocialIconsLink href="/" target="_blank"
                        aria-label="Facebook">
                            <FaFacebook/>
                        </SocialIconsLink>
                        <SocialIconsLink href="/" target="_blank"
                        aria-label="Instagram">
                            <FaInstagram/>
                        </SocialIconsLink>
                        <SocialIconsLink href="/" target="_blank"
                        aria-label="Youtube">
                            <FaYoutube/>
                        </SocialIconsLink>
                        <SocialIconsLink href="//www.twitter.com" target="_blank"
                        aria-label="Twitter">
                            <FaTwitter/>
                        </SocialIconsLink>
                        <SocialIconsLink href="/" target="_blank"
                        aria-label="Linkedin">
                            <FaLinkedin/>
                        </SocialIconsLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>    
        </FooterWrap>
    </FooterContanier>
  )
}

export default Footer