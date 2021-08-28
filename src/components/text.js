import styled from 'styled-components'

const Text = ({ text }) => {
  return <StyledText>{text}</StyledText>
}

export default Text

const StyledText = styled.p`
  font-size: 2rem;
  font-weight: var(--font-bold);
  color: #ffffff;
  text-transform: uppercase;

  @media (min-width: 900px) {
    font-size: 3.8rem;
  }
`
