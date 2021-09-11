import styled from 'styled-components'

const Button = ({ text, onClick }) => {
  return <StyledButton onClick={onClick}>{text}</StyledButton>
}

export default Button

const StyledButton = styled.button`
  display: inline-block;
  background-color: transparent;
  color: #ffffff;
  font-family: inherit;
  font-size: 1.8rem;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
  margin: 0 auto;
  padding: 0.8rem 3.6rem;
  border: 2px solid var(--header-outline);
  border-radius: 0.8rem;
  cursor: pointer;
  transition: all 200ms ease-out;
  box-shadow: var(--box-shadow);

  &:hover,
  &:focus {
    background-color: rgba(255, 255, 255, 0.1);
  }

  @media (min-width: 900px) {
    margin: 0 0 0 auto;
  }
`
