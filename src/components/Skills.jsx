import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

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

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  width: 100%;
  margin-top: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`

const SkillCategory = styled(motion.div)`
  background-color: ${props => props.theme.colors.cardBg};
  border-radius: 4px;
  padding: 1.75rem;

  h3 {
    color: ${props => props.theme.colors.primary};
    font-size: 17px;
    margin-bottom: 15px;
    font-family: ${props => props.theme.fonts.mono};
  }
`

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;

  li {
    color: ${props => props.theme.colors.text};
    font-size: 14px;
    position: relative;
    padding-left: 18px;
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
  }
`

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        "React.js",
        "JavaScript (ES6+)",
        "TypeScript",
        "HTML5 & CSS3",
        "Redux",
        "Styled Components",
        "Responsive Design",
        "Next.js"
      ]
    },
    {
      title: "Backend Development",
      skills: [
        "Node.js",
        "Express.js",
        "Python",
        "Django",
        "RESTful APIs",
        "GraphQL",
        "PostgreSQL",
        "MongoDB"
      ]
    },
    {
      title: "Tools & Deployment",
      skills: [
        "Git & GitHub",
        "Docker",
        "AWS",
        "CI/CD",
        "Jest/Testing",
        "VS Code",
        "Postman",
        "Firebase"
      ]
    },
    {
      title: "Professional Skills",
      skills: [
        "Agile/Scrum",
        "TDD",
        "System Design",
        "Code Review",
        "Technical Writing",
        "Problem Solving",
        "Communication",
        "Collaboration"
      ]
    }
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
            {skillCategories.map((category, i) => (
              <SkillCategory
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <h3>{category.title}</h3>
                <SkillList>
                  {category.skills.map((skill, j) => (
                    <li key={j}>{skill}</li>
                  ))}
                </SkillList>
              </SkillCategory>
            ))}
          </SkillsGrid>
        </SkillsContent>
      </Container>
    </StyledSkills>
  )
}

export default Skills 