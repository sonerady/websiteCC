import React from 'react'
import Icon1 from '../../images/temaHarry.png';
import Icon2 from '../../images/temaBenj.png';
import Icon3 from '../../images/temaVinz.png';
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
} from './TeamsElements';
const Teams = () => {
  return (
    <ServicesContanier id="services">
        <ServicesH1>Our Team</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1} />
                <ServicesH2>Harry</ServicesH2>
                <ServicesP>Manager</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2} />
                <ServicesH2 >Benjamin</ServicesH2>
                <ServicesP>Audit</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3} />
                <ServicesH2>Vinz</ServicesH2>
                <ServicesP>Develop</ServicesP>
            </ServicesCard>
            
        </ServicesWrapper>
    </ServicesContanier>
  )
}

export default Teams