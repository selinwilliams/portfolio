import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const StyledAbout = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px 0;
`

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 50px 0 100px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 0 25px;
  }
`

const AboutContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 280px;

  @media (min-width: 1921px) {
    margin-left: 400px;
  }

  @media (min-width: 1441px) and (max-width: 1920px) {
    margin-left: 300px;
  }

  @media (max-width: 1920px) {
  @media (min-width: 1201px) and (max-width: 1440px) {
    margin-left: 200px;
  }
  
  @media (max-width: 1200px) {
    margin-left: 100px;
  }

  @media (max-width: 768px) {
    margin-left: 0;
    padding-top: 50px;
  }
`

const SectionTitle = styled(motion.h2)`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  font-size: 28px;
  font-weight: 600;
  color: ${props => props.theme.colors.heading};
  white-space: nowrap;
  width: 100%;

  &:after {
    content: "";
    display: block;
    height: 1px;
    width: 300px;
    background-color: ${props => props.theme.colors.primary};
    margin-left: 20px;
    opacity: 0.3;
  }

  span {
    color: ${props => props.theme.colors.primary};
    font-family: ${props => props.theme.fonts.mono};
    font-size: 18px;
    margin-right: 10px;
  }
`

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 80px;
  align-items: flex-start;
  width: 100%;
  margin-top: 50px;

  @media (min-width: 1921px) {
    gap: 120px;
  }

  @media (max-width: 1200px) {
    grid-template-columns: 2fr 1fr;
    gap: 60px;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 20px;
    margin-top: 40px;
  }
`

const AboutText = styled(motion.div)`
  p {
    margin-bottom: 15px;
    font-size: 14px;
    line-height: 1.6;
    color: ${props => props.theme.colors.text};

    @media (max-width: 768px) {
      font-size: 14px;
      margin-bottom: 12px;
    }
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    gap: 8px;
    padding: 0;
    margin: 15px 0;
    list-style: none;
    
    li {
      position: relative;
      padding-left: 18px;
      font-family: ${props => props.theme.fonts.mono};
      font-size: 13px;
      color: ${props => props.theme.colors.text};
      line-height: 1.6;

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: ${props => props.theme.colors.primary};
        font-size: 12px;
      }
    }
    
    @media (max-width: 480px) {
      grid-template-columns: 1fr;
      gap: 5px;
      margin: 12px 0;
    }
  }
`

const ImageWrapper = styled(motion.div)`
  position: relative;
  max-width: 300px;
  justify-self: center;
 

  @media (max-width: 1200px) {
    max-width: 280px;
  }

  @media (max-width: 1080px) {
    max-width: 250px;
  }

  @media (max-width: 900px) {
    margin: 20px auto 0;
    max-width: 60%;
  }

  @media (max-width: 480px) {
    max-width: 85%;
    margin: 10px auto 0;
  }
`

const StyledImage = styled.img`
  width: 100%;
  border-radius: 12px;
  filter: grayscale(100%) contrast(1.2) brightness(1.1);
`

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.colors.primary};
  mix-blend-mode: multiply;
  opacity: 0.15;
  border-radius: 12px;
  pointer-events: none;
`

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  return (
    <StyledAbout id="about">
      <Container>
        <AboutContent>
          <SectionTitle
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span>01.</span> About Me
          </SectionTitle>
          
          <ContentWrapper ref={ref}>
            <AboutText
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <p>
                Hello! I'm Selin, a software engineer passionate about creating digital experiences that make a difference. 
                My journey in web development started back in 2021 when I decided to explore the world of coding.
              </p>
              <p>
                Fast-forward to today, I've had the privilege of working on diverse projects that have helped me develop 
                a strong foundation in both frontend and backend development. I focus on writing clean, efficient code 
                and building user-friendly applications.
              </p>
              <p>Here are a few technologies I've been working with recently:</p>
              <ul>
                <li>JavaScript (ES6+)</li>
                <li>React</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>Python</li>
                <li>PostgreSQL</li>
              </ul>
            </AboutText>
            
            <ImageWrapper
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <StyledImage src="/profile-image.jpeg" alt="Selin Williams" />
              <ImageOverlay className="img-overlay" />
            </ImageWrapper>
          </ContentWrapper>
        </AboutContent>
      </Container>
    </StyledAbout>
  )
}

export default About 