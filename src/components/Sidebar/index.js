import React from 'react'
import { SidebarContanier , Icon , CloseIcon , SideBtnWrap , SidebarLink , SidebarRoute , SidebarWrapper , SidebarMenu } from './SidebarElements'


const Sidebar = ({isOpen , toggle}) => {
  return (
    <SidebarContanier isOpen={isOpen} onClick={toggle}>
        <Icon>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="about" onClick={toggle}>
                    About
                </SidebarLink>
                <SidebarLink to="search" onClick={toggle}>
                Audit
                </SidebarLink>
                <SidebarLink to="tokens" onClick={toggle}>
                Development
                </SidebarLink>
                <SidebarLink to="services" onClick={toggle}>
                Team
                </SidebarLink>
                <SidebarLink to="teams" onClick={toggle}>
                Services
                </SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/signin">
                    Sign In
                </SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContanier>
  )
}

export default Sidebar
