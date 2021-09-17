import styled from 'styled-components'

const PlayAgain = () => {
  return (
    <Container>
      <p>You lose</p>
      <button>Play again</button>
    </Container>
  )
}

export default PlayAgain

const Container = styled.div`
  margin: 0 auto;

  p {
    text-transform: uppercase;
    color: #fff;
    font-size: 5.1rem;
    font-weight: var(--font-bold);
    text-align: center;
    width: 200px;
    margin-bottom: 1.5rem;
  }

  button {
    display: inline-block;
    width: 200px;
    font-size: 1.6rem;
    font-family: inherit;
    padding: 1.4rem 0;
    letter-spacing: 0.2rem;
    text-transform: uppercase;
    border: none;
    border-radius: 0.8rem;
    cursor: pointer;
    outline: none;
    transition: all 200ms ease-out;

    &:hover {
      color: var(--rock);
    }
  }
`
