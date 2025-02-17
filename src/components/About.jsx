import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'

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
  align-items: flex-start;

  @media (max-width: 768px) {
    padding: 0 30px;
  }

  @media (max-width: 480px) {
    padding: 0 20px;
  }
`

const AboutContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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

  @media (max-width: 768px) {
    font-size: 24px;
    margin-bottom: 30px;

    &:after {
      width: 200px;
    }

    span {
      font-size: 16px;
    }
  }

  @media (max-width: 480px) {
    font-size: 20px;
    margin-bottom: 25px;

    &:after {
      width: 150px;
    }

    span {
      font-size: 14px;
    }
  }
`

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  margin-top: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 40px;
    margin-top: 30px;
    text-align: left;
  }

  @media (max-width: 480px) {
    gap: 25px;
    margin-top: 20px;
  }
`

const AboutText = styled(motion.div)`
  flex: 3;
  margin-right: 40px;

  @media (max-width: 768px) {
    margin-right: 0;
    width: 100%;
    order: 2;
  }

  p {
    margin-bottom: 15px;
    font-size: 14px;
    line-height: 1.6;
    color: ${props => props.theme.colors.text};

    @media (max-width: 768px) {
      font-size: 13px;
      margin-bottom: 12px;
      line-height: 1.5;
    }

    @media (max-width: 480px) {
      font-size: 12px;
      margin-bottom: 10px;
      line-height: 1.4;
    }
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    padding: 0;
    margin: 15px 0;
    list-style: none;
    
    @media (max-width: 768px) {
      gap: 6px;
      margin: 12px 0;
      justify-content: flex-start;
    }

    @media (max-width: 480px) {
      gap: 4px;
      margin: 8px 0;
    }
    
    li {
      position: relative;
      padding-left: 18px;
      font-family: ${props => props.theme.fonts.mono};
      font-size: 13px;
      color: ${props => props.theme.colors.text};
      line-height: 1.6;
      width: calc(50% - 4px);
      min-width: 140px;

      @media (max-width: 768px) {
        font-size: 12px;
        padding-left: 15px;
        width: calc(50% - 3px);
        min-width: 120px;
        line-height: 1.5;
      }

      @media (max-width: 480px) {
        font-size: 11px;
        padding-left: 12px;
        line-height: 1.4;
        width: 100%;
        min-width: unset;
      }

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: ${props => props.theme.colors.primary};
        font-size: 12px;

        @media (max-width: 480px) {
          font-size: 10px;
          top: 1px;
        }
      }
    }
  }
`

const ImageWrapper = styled(motion.div)`
  position: relative;
  flex: 2;
  max-width: 300px;
  margin-left: 40px;

  @media (max-width: 768px) {
    max-width: 250px;
    margin: 0;
    width: 100%;
    order: 1;
  }

  @media (max-width: 480px) {
    max-width: 200px;
  }
`

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 12px;
  filter: grayscale(100%) contrast(1.1) brightness(1.1);
  transition: all 0.3s ease;
  opacity: 0;

  &.loaded {
    opacity: 1;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  const [imageError, setImageError] = useState(false);

  const handleImageLoad = (e) => {
    e.target.classList.add('loaded');
  };

  const handleImageError = () => {
    setImageError(true);
    console.error('Failed to load image');
  };

  return (
    <StyledAbout id="about">
      <Container>
        <AboutContent>
          <SectionTitle
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.2 }}
          >
            <span>01.</span> About Me
          </SectionTitle>

          <ContentWrapper ref={ref}>
            <AboutText
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.2 }}
            >
              <p>
                Hello! I'm Selin, a software engineer focused on building impactful solutions that solve real-world problems.
              </p>
              <p>
                As an English teacher in Turkey, I was completely unaware that Silicon Valley would soon rewrite my story.
                The Bay Area's infectious energy and innovation culture sparked an unexpected plot twist in my career narrative.
                Trading Shakespeare for JavaScript might seem like a dramatic pivot, but the art of breaking down complex stories translates surprisingly well into writing elegant code.
                My journey from teaching syntax and literature to mastering programming syntax has equipped me with a unique perspective: the ability to see technical challenges through both a creative and analytical lens.

                Now, as a full-stack engineer specializing in modern JavaScript frameworks and Python technologies, I've channeled my teaching experience into developing intuitive applications.
                My flagship project, FoodBridge, connects food providers with distribution centers to combat food waste.
                This project not only showcases my technical skills but also reflects my commitment to developing solutions that make a tangible difference in communities.

                As the tech landscape evolves with AI and machine learning reshaping development practices, I'm particularly intrigued by the possibilities of integrating these technologies into practical applications.
              </p>
              <p>
                Currently, I'm focused on building and scaling FoodBridge (React/Flask) and TaskFlow (React/Redux/Flask), creating solutions that combine technical excellence with real-world impact.
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
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              {!imageError && (
                <StyledImage 
                  src="profile-image.jpeg"
                  alt="Selin Williams" 
                  onLoad={handleImageLoad}
                  onError={handleImageError}
                />
              )}
            </ImageWrapper>
          </ContentWrapper>
        </AboutContent>
      </Container>
    </StyledAbout>
  )
}

export default About 