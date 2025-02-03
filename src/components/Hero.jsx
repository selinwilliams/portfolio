import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const StyledHero = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 150px;

  @media (max-width: 1080px) {
    padding: 0 100px;
  }

  @media (max-width: 768px) {
    padding: 0 50px;
  }

  @media (max-width: 480px) {
    padding: 0 25px;
  }
`

const HeroContent = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
`

const Greeting = styled(motion.p)`
  color: ${props => props.theme.colors.primary};
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 25px;
  font-family: ${props => props.theme.fonts.mono};
  letter-spacing: 0.1em;
`

const Title = styled(motion.h1)`
  font-size: 80px;
  font-weight: 600;
  color: ${props => props.theme.colors.heading};
  line-height: 1.1;
  margin-bottom: 15px;
  letter-spacing: -0.02em;

  @media (max-width: 1080px) {
    font-size: 70px;
  }

  @media (max-width: 768px) {
    font-size: 60px;
  }

  @media (max-width: 480px) {
    font-size: 40px;
  }
`

const Subtitle = styled(motion.h2)`
  font-size: 70px;
  font-weight: 600;
  color: ${props => props.theme.colors.text};
  line-height: 1.1;
  margin-bottom: 40px;
  letter-spacing: -0.02em;

  @media (max-width: 1080px) {
    font-size: 60px;
  }

  @media (max-width: 768px) {
    font-size: 50px;
  }

  @media (max-width: 480px) {
    font-size: 30px;
  }
`

const Description = styled(motion.p)`
  color: ${props => props.theme.colors.text};
  font-size: 20px;
  max-width: 540px;
  margin-bottom: 50px;
  line-height: 1.5;
  font-family: ${props => props.theme.fonts.mono};

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`

const CTAButton = styled(motion.a)`
  display: inline-block;
  padding: 1.25rem 1.75rem;
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 4px;
  font-size: 14px;
  font-family: ${props => props.theme.fonts.mono};
  color: ${props => props.theme.colors.primary};
  text-align: center;
  letter-spacing: 0.1em;
  transition: ${props => props.theme.transitions.standard};

  &:hover {
    background: rgba(100, 255, 218, 0.1);
    transform: translateY(-3px);
  }

  @media (max-width: 480px) {
    padding: 1rem 1.5rem;
    font-size: 13px;
  }
`

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
      duration: 0.5
    }
  }
}

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1.0],
    }
  }
}

const Hero = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <StyledHero>
      <HeroContent
        as={motion.div}
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <Greeting variants={itemVariants}>
          Hi, my name is
        </Greeting>
        <Title variants={itemVariants}>
          Selin Williams
        </Title>
        <Subtitle variants={itemVariants}>
          Full Stack Software Engineer
        </Subtitle>
        <Description variants={itemVariants}>
          Building thoughtful web solutions that bridge technology with real-world needs.
        </Description>
        <CTAButton
          href="#work"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Check out my work!
        </CTAButton>
      </HeroContent>
    </StyledHero>
  )
}

export default Hero