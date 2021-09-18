import styled from 'styled-components'
import Text from '../components/text'
import ScoreText from '../components/score-text'

const Score = () => {
  return (
    <ScoreContainer>
      <TextContainer>
        <Text text='Rock' />
        <Text text='Paper' />
        <Text text='Scissors' />
      </TextContainer>
      <ScoreText />
    </ScoreContainer>
  )
}

export default Score

const ScoreContainer = styled.header`
  max-width: 500px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 1rem;
  border: 2px solid var(--header-outline);
  border-radius: 0.8rem;
  box-shadow: var(--box-shadow);
  opacity: 0;
  animation: slidein 1200ms ease-out forwards;

  @media (min-width: 900px) {
    max-width: 750px;
    padding: 2rem;
  }

  @keyframes slidein {
    0% {
      transform: translateY(-100%);
    }

    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`

const TextContainer = styled.div`
  p:nth-child(n + 2) {
    margin-top: -0.6rem;
  }

  @media (min-width: 900px) {
    p:nth-child(n + 2) {
      margin-top: -1.4rem;
    }
  }
`
