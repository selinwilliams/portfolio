import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact,
  FaNode,
  FaPython,
  FaDatabase,
  FaDocker,
  FaGit,
  FaGithub,
} from 'react-icons/fa'
import { 
  SiFlask, 
  SiExpress, 
  SiRedux, 
  SiTypescript,
  SiPostgresql,
  SiSequelize,
  SiVite,
  SiMui,
} from 'react-icons/si'
import { BiTestTube } from 'react-icons/bi'
import { TbApi } from 'react-icons/tb'

const StyledSkills = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: center;
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
`

const SkillsContent = styled.div`
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
`
const SectionTitle2 = styled(motion.h2)`
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
    opacity: 0;
  }


  span {
    color: ${props => props.theme.colors.primary};
    font-family: ${props => props.theme.fonts.mono};
    font-size: 18px;
    margin-right: 10px;
  }
`
const ContentWrapper = styled.div`
  width: 100%;
  margin-top: 50px;
`

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(120px, 1fr));
  gap: 25px;
  width: 100%;
  margin-top: 50px;
  padding: 0;
  margin-left: 60px;

`

const SkillItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 20px 10px;
  text-align: center;

  svg {
    width: 40px;
    height: 40px;
    color: ${props => props.theme.colors.text};
    transition: ${props => props.theme.transitions.standard};
    display: block;
    margin: 0 auto;
  }

  span {
    color: ${props => props.theme.colors.text};
    font-size: 13px;
    font-family: ${props => props.theme.fonts.mono};
    text-align: center;
    width: 100%;
    display: block;
  }

  &:hover {
    svg {
      color: ${props => props.theme.colors.primary};
      transform: translateY(-3px);
    }
    span {
      color: ${props => props.theme.colors.primary};
    }
  }
`

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const titleVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5
    }
  }
}

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  const skills = [
    // Core Frontend
    { name: "React", icon: FaReact },
    { name: "Redux", icon: SiRedux },
    { name: "JavaScript", icon: FaJs },
    { name: "TypeScript", icon: SiTypescript },
    { name: "HTML5", icon: FaHtml5 },
    { name: "CSS3", icon: FaCss3Alt },
    { name: "Material UI", icon: SiMui },
    { name: "Vite", icon: SiVite },
    
    // Core Backend
    { name: "Python", icon: FaPython },
    { name: "Flask", icon: SiFlask },
    { name: "Node.js", icon: FaNode },
    { name: "Express", icon: SiExpress },
    
    // Database
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "SQL", icon: FaDatabase },
    { name: "Sequelize", icon: SiSequelize },
    
    // Development Tools
    { name: "Git", icon: FaGit },
    { name: "GitHub", icon: FaGithub },
    { name: "Docker", icon: FaDocker },
    
    // API & Testing
    { name: "REST APIs", icon: TbApi },
    { name: "Testing", icon: BiTestTube }
  ]

  return (
    <StyledSkills id="skills">
      <SectionTitle2>
      <Container>
        <SkillsContent
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <SectionTitle
            variants={titleVariants}
          >
            <span>03.</span> Technologies
          </SectionTitle>

          <ContentWrapper>
            <SkillsGrid ref={ref}>
              {skills.map((skill, i) => (
                <SkillItem
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.5
                      }
                    }
                  }}
                >
                  <skill.icon />
                  <span>{skill.name}</span>
                </SkillItem>
              ))}
            </SkillsGrid>
          </ContentWrapper>
        </SkillsContent>
      </Container>
      </SectionTitle2>
    </StyledSkills>
  )
}

export default Skills 