import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const StyledProjects = styled.section`
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

const ProjectsContent = styled.div`
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

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
  width: 100%;
  margin-top: 50px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    margin-top: 40px;
    gap: 20px;
  }
`

const ProjectCard = styled(motion.div)`
  position: relative;
  background-color: ${props => props.theme.colors.cardBg};
  border-radius: 4px;
  padding: 1.75rem;
  height: 100%;
  
  @media (max-width: 768px) {
    padding: 1.5rem 1.25rem;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;

    @media (max-width: 768px) {
      margin-bottom: 20px;
    }
  }

  h3 {
    margin: 0;
    color: ${props => props.theme.colors.heading};
    font-size: 17px;
    font-weight: 600;

    @media (max-width: 768px) {
      font-size: 16px;
    }
  }

  .project-links {
    display: flex;
    align-items: center;
    margin-right: -10px;
    color: ${props => props.theme.colors.heading};

    a {
      padding: 5px 10px;
      
      svg {
        width: 18px;
        height: 18px;
      }

      &:hover {
        color: ${props => props.theme.colors.primary};
      }
    }
  }
`

const ProjectDescription = styled.div`
  color: ${props => props.theme.colors.text};
  font-size: 14px;
  line-height: 1.6;
`

const TechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 0;
  margin: 15px 0 0;
  list-style: none;

  li {
    font-family: ${props => props.theme.fonts.mono};
    font-size: 12px;
    color: ${props => props.theme.colors.primary};
    line-height: 1.6;
  }
`

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const projects = [
    {
      title: "TaskFlow",
      description: "A modern task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      tech: ["React", "Node.js", "MongoDB", "Socket.io"],
      github: "https://github.com",
      external: "https://project.com"
    },
    {
      title: "WeatherVue",
      description: "An elegant weather application featuring detailed forecasts, interactive maps, and location-based weather alerts using multiple weather APIs.",
      tech: ["Vue.js", "Express", "OpenWeather API"],
      github: "https://github.com",
      external: "https://project.com"
    },
    {
      title: "CodeShare",
      description: "A real-time code collaboration platform with syntax highlighting, live video chat, and integrated version control for seamless team coding.",
      tech: ["TypeScript", "Socket.io", "PostgreSQL"],
      github: "https://github.com",
      external: "https://project.com"
    }
  ]

  return (
    <StyledProjects id="work">
      <Container>
        <ProjectsContent>
          <SectionTitle
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span>03.</span> Some Things I've Built
          </SectionTitle>

          <ProjectGrid ref={ref}>
            {projects.map((project, i) => (
              <ProjectCard
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <header>
                  <h3>{project.title}</h3>
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <FiGithub />
                    </a>
                    <a href={project.external} target="_blank" rel="noopener noreferrer">
                      <FiExternalLink />
                    </a>
                  </div>
                </header>
                <ProjectDescription>
                  <p>{project.description}</p>
                </ProjectDescription>
                <TechList>
                  {project.tech.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </TechList>
              </ProjectCard>
            ))}
          </ProjectGrid>
        </ProjectsContent>
      </Container>
    </StyledProjects>
  )
}

export default Projects 