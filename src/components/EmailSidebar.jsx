import styled from 'styled-components'

const StyledSidebar = styled.div`
  position: fixed;
  bottom: 0;
  right: 40px;
  z-index: 10;
  writing-mode: vertical-rl;

  @media (max-width: 768px) {
    display: none;
  }
`

const EmailLink = styled.a`
  color: ${props => props.theme.colors.text};
  text-decoration: none;
  font-size: 13px;
  letter-spacing: 0.1em;
  margin-bottom: 20px;
  font-family: ${props => props.theme.fonts.mono};
  transition: ${props => props.theme.transitions.standard};

  &:hover {
    color: ${props => props.theme.colors.primary};
    transform: translateY(-3px);
  }
`

const Line = styled.div`
  width: 1px;
  height: 90px;
  background-color: ${props => props.theme.colors.text};
  margin: 0 auto;
`

const EmailSidebar = () => {
  return (
    <StyledSidebar>
      <EmailLink href="mailto:your.email@example.com">
        selin.williams.tx@gmail.com
      </EmailLink>
      <Line />
    </StyledSidebar>
  )
}

export default EmailSidebar 