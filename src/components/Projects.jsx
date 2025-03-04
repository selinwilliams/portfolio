import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import FadeInSection from './FadeInSection'

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
  align-items: flex-start;

  @media (max-width: 768px) {
    padding: 0 25px;
  }

  @media (max-width: 480px) {
    padding: 0 20px;
  }
`

const ProjectsContent = styled.div`
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
      width: 100px;
    }

    span {
      font-size: 14px;
    }
  }
`

const ProjectGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;
  width: 100%;
  margin-top: 50px;
  padding: 0;

  @media (max-width: 1200px) {
    gap: 20px;
  }

  @media (max-width: 768px) {
    margin-top: 40px;
    gap: 20px;
    padding: 0;
  }

  @media (max-width: 480px) {
    gap: 15px;
    margin-top: 30px;
    padding: 0;
  }
`

const ProjectCard = styled(motion.div)`
  position: relative;
  background-color: ${props => props.theme.colors.cardBg};
  border-radius: 4px;
  padding: 1.75rem;
  width: calc(33.333% - 17px);
  min-width: 280px;

  @media (max-width: 1200px) {
    width: calc(50% - 10px);
    min-width: 260px;
    padding: 1.5rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 500px;
    min-width: auto;
    padding: 1.25rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    width: 100%;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;

    @media (max-width: 480px) {
      margin-bottom: 15px;
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

    @media (max-width: 480px) {
      font-size: 15px;
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

  @media (max-width: 768px) {
    font-size: 13px;
    line-height: 1.5;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    line-height: 1.4;
  }
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

  @media (max-width: 480px) {
    gap: 6px;
    margin: 12px 0 0;
    
    li {
      font-size: 11px;
    }
  }
`

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      }
    }
  }

  const titleVariants = {
    hidden: { 
      opacity: 0, 
      x: -50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.8
      }
    }
  }

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.8
      }
    }
  }

  const projects = [
    {
      title: "FoodBridge",
      description: "A full-stack web application designed to reduce food waste while addressing food insecurity in local communities. This platform creates a seamless connection between food service providers (restaurants, grocery stores, etc.) and recipients in need, facilitating efficient food donation and distribution.",
      tech: ["React/Redux", "Flask/PostgreSQL", "Chart.js", "Node.js"],
      github: "https://github.com/selinwilliams/FoodBridge",
      external: "https://foodbridge.sbtl.dev"
    },
    {
      title: "TaskFlow",
      description: "A modern, full-stack project management solution built to streamline agile development workflows. TaskFlow empowers teams to efficiently manage projects through an intuitive drag-and-drop interface and real-time progress tracking.",
      tech: ["React.js", "Redux", "Vite", "Flask", "PostgreSQL", "SQLAlchemy ORM", "Docker", "CSS Modules", "Git"],
      github: "https://github.com/JustCodeIt760/Mod7",
      external: "https://taskflow.sbtl.dev"
    },
    {
      title: "TrailHome",
      description: "A full-stack web application that reimagines the vacation rental experience, built using Express.js and PostgreSQL. This platform enables users to list, discover, and review unique accommodations with an intuitive interface and robust backend architecture.",
      tech: ["Node.js",  "Express.js", "PostgreSQL", "Sequelize ORM", "React", "Redux"],
      github: "https://github.com/selinwilliams/TrailHome",
      external: "https://trailhome.sbtl.dev"
    }
  ]

  return (
    <StyledProjects id="work">
      <Container>
        <ProjectsContent
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <SectionTitle
            variants={titleVariants}
          >
            <span>02.</span> Some Things I've Built
          </SectionTitle>

          <ProjectGrid ref={ref}>
            {projects.map((project, i) => (
              <ProjectCard
                key={i}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.03,
                  transition: { duration: 0.2 }
                }}
              >
                <header>
                  <h3>{project.title}</h3>
                  <div className="project-links">
                    <motion.a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, color: '#64ffda' }}
                      transition={{ duration: 0.2 }}
                    >
                      <FiGithub />
                    </motion.a>
                    <motion.a 
                      href={project.external} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, color: '#64ffda' }}
                      transition={{ duration: 0.2 }}
                    >
                      <FiExternalLink />
                    </motion.a>
                  </div>
                </header>
                <ProjectDescription>
                  <p>{project.description}</p>
                </ProjectDescription>
                <TechList>
                  {project.tech.map((tech, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 + (i * 0.1) }}
                    >
                      {tech}
                    </motion.li>
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