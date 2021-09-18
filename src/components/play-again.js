import { useContext } from 'react'
import styled from 'styled-components'
import { store } from '../context/store'

const PlayAgain = () => {
  const { result, resetGameHandler } = useContext(store)

  return (
    <Container result={result}>
      <p>{result ? result : 'text'}</p>
      <button onClick={resetGameHandler}>Play again</button>
    </Container>
  )
}

export default PlayAgain

const Container = styled.div`
  margin: 0 auto;
  grid-area: button;
  visibility: ${({ result }) => (result ? 'visible' : 'hidden')};

  @media (min-width: 900px) {
    visibility: visible;
    display: ${({ result }) => (result ? 'block' : 'none')};
  }
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
    box-shadow: var(--box-shadow);

    &:hover {
      color: var(--rock);
    }
  }
`
