import { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { scrollTo } from '../utils/scrollTo'

const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--nav-height);
  padding: 0 50px;
  background: ${props => props.theme.colors.glassBg};
  backdrop-filter: blur(10px);
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.15s ease;

  @media (max-width: 1080px) {
    padding: 0 40px;
  }

  @media (max-width: 768px) {
    padding: 0 25px;
  }
`

const Logo = styled.div`
  svg {
    width: 42px;
    height: 42px;
  }
  rect {
    fill: ${props => props.theme.colors.primary};
  }
  text {
    fill: ${props => props.theme.colors.background};
  }

  @media (max-width: 768px) {
    svg {
      width: 38px;
      height: 38px;
    }
  }
`

const NavLinks = styled.div`
  display: flex;
  gap: 2.5rem;
  align-items: center;
  margin-right: 30px;

  @media (max-width: 1080px) {
    gap: 2rem;
    margin-right: 20px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`

const NavLink = styled.a`
  color: ${props => props.theme.colors.heading};
  text-decoration: none;
  font-size: 13px;
  font-family: ${props => props.theme.fonts.mono};
  transition: all 0.15s ease;

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`

const NavNumber = styled.span`
  color: ${props => props.theme.colors.primary};
  font-size: 14px;
  margin-right: 5px;
  font-family: ${props => props.theme.fonts.mono};
`

const ResumeButton = styled.a`
  color: ${props => props.theme.colors.primary};
  border: 1px solid ${props => props.theme.colors.primary};
  padding: 0.75rem 1rem;
  border-radius: 4px;
  font-size: 13px;
  font-family: ${props => props.theme.fonts.mono};
  margin-left: 15px;
  transition: all 0.15s ease;

  &:hover {
    background: rgba(100, 255, 218, 0.1);
  }
`

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 1000;

  @media (max-width: 768px) {
    display: block;
  }
`

const HamburgerLine = styled.span`
  display: block;
  width: 25px;
  height: 2px;
  margin: 5px 0;
  background-color: ${props => props.theme.colors.primary};
  transition: all 0.15s ease;

  ${props => props.isOpen && `
    &:nth-child(1) {
      transform: rotate(45deg) translate(5px, 5px);
    }
    &:nth-child(2) {
      opacity: 0;
    }
    &:nth-child(3) {
      transform: rotate(-45deg) translate(7px, -6px);
    }
  `}
`

const MobileMenu = styled(motion.div)`
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    background: ${props => props.theme.colors.background};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    padding: 2rem;

    ${NavLink} {
      font-size: 16px;
    }

    ${ResumeButton} {
      font-size: 16px;
      padding: 1rem 1.5rem;
      margin-top: 1rem;
    }
  }
`

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleNavClick = (e, id) => {
    e.preventDefault();
    scrollTo(id);
    if (isOpen) setIsOpen(false);
  };

  return (
    <StyledNav>
      <Logo>
        <svg viewBox="0 0 40 40" fill="none">
          <rect width="40" height="40" rx="8" />
          <text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="24" fontWeight="600">
            SW
          </text>
        </svg>
      </Logo>

      <NavLinks>
        <NavLink href="#about" onClick={(e) => handleNavClick(e, 'about')}>
          <NavNumber>01.</NavNumber>About
        </NavLink>
        <NavLink href="#work" onClick={(e) => handleNavClick(e, 'work')}>
          <NavNumber>02.</NavNumber>Projects
        </NavLink>
        <NavLink href="#skills" onClick={(e) => handleNavClick(e, 'skills')}>
          <NavNumber>03.</NavNumber>Technologies
        </NavLink>
        <NavLink href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>
          <NavNumber>04.</NavNumber>Contact
        </NavLink>
        <ResumeButton href="/Williams_Selin_Resume.pdf" target="_blank" rel="noopener noreferrer">
          Resume
        </ResumeButton>
      </NavLinks>

      <MobileMenuButton onClick={() => setIsOpen(!isOpen)}>
        <HamburgerLine isOpen={isOpen} />
        <HamburgerLine isOpen={isOpen} />
        <HamburgerLine isOpen={isOpen} />
      </MobileMenuButton>

      {isOpen && (
        <MobileMenu
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "tween", duration: 0.15 }}
        >
          <NavLink href="#about" onClick={(e) => handleNavClick(e, 'about')}>
            <NavNumber>01.</NavNumber>About
          </NavLink>
          <NavLink href="#work" onClick={(e) => handleNavClick(e, 'work')}>
            <NavNumber>02.</NavNumber>Projects
          </NavLink>
          <NavLink href="#skills" onClick={(e) => handleNavClick(e, 'skills')}>
            <NavNumber>03.</NavNumber>Technologies
          </NavLink>
          <NavLink href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>
            <NavNumber>04.</NavNumber>Contact
          </NavLink>
          <ResumeButton href="/Williams_Selin_Resume.pdf" target="_blank" rel="noopener noreferrer">
            Resume
          </ResumeButton>
        </MobileMenu>
      )}
    </StyledNav>
  )
}

export default Navbar 