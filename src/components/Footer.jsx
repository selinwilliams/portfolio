import styled from 'styled-components'

const StyledFooter = styled.footer`
  width: 100%;
  background-color: ${props => props.theme.colors.background};
  padding: 20px 0;
  position: relative;
  bottom: 0;
  padding-left: 300px;
`

const FooterContent = styled.div`
  text-align: center;
  color: ${props => props.theme.colors.text};
  font-family: ${props => props.theme.fonts.mono};
  font-size: 12px;
  opacity: 0.7;
`

const Footer = () => {
  return (
    <StyledFooter>
      <FooterContent>
        © {new Date().getFullYear()} Selin Williams. All rights reserved.
      </FooterContent>
    </StyledFooter>
  )
}

export default Footer
