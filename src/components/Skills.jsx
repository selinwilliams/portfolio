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

const SkillsContent = styled.div`
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

  @media (min-width: 1201px) and (max-width: 1440px) {
    margin-left: 220px;
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
  margin-bottom: 80px;
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

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 60px 40px;
  width: 100%;
  margin-bottom: 50px;
  padding: 20px 0;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 50px 30px;
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 40px 25px;
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px 20px;
  }
`

const SkillItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 10px;

  svg {
    width: 35px;
    height: 35px;
    color: ${props => props.theme.colors.text};
    transition: ${props => props.theme.transitions.standard};
  }

  span {
    color: ${props => props.theme.colors.text};
    font-size: 12px;
    font-family: ${props => props.theme.fonts.mono};
    text-align: center;
    white-space: nowrap;
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
      <Container>
        <SkillsContent>
          <SectionTitle
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span>02.</span> Skills
          </SectionTitle>

          <SkillsGrid ref={ref}>
            {skills.map((skill, i) => (
              <SkillItem
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <skill.icon />
                <span>{skill.name}</span>
              </SkillItem>
            ))}
          </SkillsGrid>
        </SkillsContent>
      </Container>
    </StyledSkills>
  )
}

export default Skills 