import styled from 'styled-components'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { FaDiscord, FaWhatsapp } from 'react-icons/fa'

const StyledSidebar = styled.div`
  position: fixed;
  bottom: 0;
  left: 40px;
  z-index: 10;

  @media (max-width: 768px) {
    display: none;
  }
`

const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  margin-bottom: 20px;

  a {
    color: ${props => props.theme.colors.text};
    font-size: 20px;
    transition: ${props => props.theme.transitions.standard};

    &:hover {
      color: ${props => props.theme.colors.primary};
      transform: translateY(-3px);
    }
  }
`

const Line = styled.div`
  width: 1px;
  height: 90px;
  background-color: ${props => props.theme.colors.text};
  margin: 0 auto;
`

const SocialSidebar = () => {
  return (
    <StyledSidebar>
      <SocialLinks>
         <a href="https://github.com/selinwilliams" target="_blank" rel="noopener noreferrer">
          <FiGithub />
        </a>
         <a href="https://linkedin.com/in/selinwilliams" target="_blank" rel="noopener noreferrer">
          <FiLinkedin />
        </a>
          <a href="https://discord.com/users/selinwilliams" target="_blank" rel="noopener noreferrer">
          <FaDiscord />
        </a>
          <a href="https://wa.me/+16506175475" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </a>
      </SocialLinks>
      <Line />
    </StyledSidebar>
  )
}

export default SocialSidebar 