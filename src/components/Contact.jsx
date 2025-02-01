import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const StyledContact = styled.section`
  min-height: calc(100vh - 100px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px 0 100px 0;
  margin-bottom: 0;
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

const ContactContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  margin-bottom: 30px;
  font-size: 28px;
  font-weight: 600;
  color: ${props => props.theme.colors.heading};
  white-space: nowrap;
  width: 100%;
  justify-content: center;

  &:after {
    content: "";
    display: block;
    height: 1px;
    width: 200px;
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

const ContactForm = styled.form`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 0 auto;
`

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

const Label = styled.label`
  color: ${props => props.theme.colors.primary};
  font-size: 13px;
  font-family: ${props => props.theme.fonts.mono};
`

const Input = styled.input`
  background-color: transparent;
  border: 1px solid ${props => props.theme.colors.primary}40;
  border-radius: 4px;
  padding: 8px;
  color: ${props => props.theme.colors.text};
  font-size: 12px;
  width: 100%;
  transition: ${props => props.theme.transitions.standard};

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    background-color: ${props => props.theme.colors.primary}10;
  }

  &::placeholder {
    color: ${props => props.theme.colors.text}80;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    -webkit-text-fill-color: ${props => props.theme.colors.text};
    -webkit-box-shadow: 0 0 0px 1000px ${props => props.theme.colors.background} inset;
    transition: background-color 5000s ease-in-out 0s;
  }
`

const TextArea = styled.textarea`
  background-color: transparent;
  border: 1px solid ${props => props.theme.colors.primary}40;
  border-radius: 4px;
  padding: 8px;
  color: ${props => props.theme.colors.text};
  font-size: 12px;
  width: 100%;
  min-height: 100px;
  resize: vertical;
  transition: ${props => props.theme.transitions.standard};

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    background-color: ${props => props.theme.colors.primary}10;
  }

  &::placeholder {
    color: ${props => props.theme.colors.text}80;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    -webkit-text-fill-color: ${props => props.theme.colors.text};
    -webkit-box-shadow: 0 0 0px 1000px ${props => props.theme.colors.background} inset;
    transition: background-color 5000s ease-in-out 0s;
  }
`

const SubmitButton = styled.button`
  background-color: transparent;
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 4px;
  padding: 8px 16px;
  color: ${props => props.theme.colors.primary};
  font-size: 12px;
  font-family: ${props => props.theme.fonts.mono};
  cursor: pointer;
  transition: ${props => props.theme.transitions.standard};
  margin-top: 12px;
  align-self: center;

  &:hover {
    background-color: ${props => props.theme.colors.primary}10;
  }
`

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const name = formData.get('name')
    const email = formData.get('email')
    const subject = formData.get('subject')
    const message = formData.get('message')

    const mailtoLink = `mailto:selin.williams.tx@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`
    
    window.location.href = mailtoLink
  }

  return (
    <StyledContact id="contact">
      <Container>
        <ContactContent>
          <SectionTitle
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span>04.</span> Get In Touch
          </SectionTitle>

          <ContactForm
            ref={ref}
            onSubmit={handleSubmit}
          >
            <FormGroup>
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                id="name"
                name="name"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="subject">Subject</Label>
              <Input
                type="text"
                id="subject"
                name="subject"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="message">Message</Label>
              <TextArea
                id="message"
                name="message"
                required
              />
            </FormGroup>

            <SubmitButton type="submit">
              Send Message
            </SubmitButton>
          </ContactForm>
        </ContactContent>
      </Container>
    </StyledContact>
  )
}

export default Contact 