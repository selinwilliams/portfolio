import { useState, useEffect } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'

// Components
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SocialSidebar from './components/SocialSidebar'
import EmailSidebar from './components/EmailSidebar'
import GlobalStyles from './styles/GlobalStyles'

// Theme
const theme = {
  colors: {
    primary: '#64ffda',
    background: '#0a192f',
    text: '#8892b0',
    heading: '#ccd6f6',
    glassBg: 'rgba(10, 25, 47, 0.7)',
    cardBg: 'rgba(17, 34, 64, 0.7)'
  },
  fonts: {
    primary: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    mono: "'Fira Code', 'Consolas', monospace"
  },
  transitions: {
    standard: 'all 0.3s ease'
  }
}

const StyledMain = styled.main`
  min-height: 100vh;
  width: 100%;
  max-width: 100vw;
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  padding-top: var(--nav-height);
  position: relative;
  overscroll-behavior: none;

  @media (max-width: 768px) {
    padding-top: calc(var(--nav-height) - 20px);
    padding-left: 0;
    padding-right: 0;
  }

  @media (max-width: 480px) {
    padding-top: calc(var(--nav-height) - 30px);
  }
`

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Reduced loading time from 1000ms to 300ms
    setTimeout(() => setIsLoading(false), 300)
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }} // Reduced from 0.5 to 0.2
          >
            {/* Add a loader component here if needed */}
          </motion.div>
        ) : (
          <StyledMain>
            <Navbar />
            <SocialSidebar />
            <EmailSidebar />
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Contact />
            <Footer />
          </StyledMain>
        )}
      </AnimatePresence>
    </ThemeProvider>
  )
}

export default App
