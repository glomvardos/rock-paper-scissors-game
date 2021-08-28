import styled from 'styled-components'

const ScoreText = () => {
  return (
    <ScoreTextContainer>
      <p className='text'>Score</p>
      <p className='score'>0</p>
    </ScoreTextContainer>
  )
}

export default ScoreText

const ScoreTextContainer = styled.div`
  width: 85px;
  padding: 1rem;
  background-color: #ffffff;
  border-radius: 0.8rem;
  text-align: center;
  box-shadow: var(--box-shadow);

  .text {
    text-transform: uppercase;
    font-size: 1.2rem;
    font-weight: var(--font-semi-bold);
    color: var(--score-text);
    letter-spacing: 0.1rem;
  }

  .score {
    font-size: 4rem;
    font-weight: var(--font-bold);
    color: var(--dark-text);
  }

  @media (min-width: 900px) {
    width: 150px;
    .text {
      font-size: 1.6rem;
      letter-spacing: 0.2rem;
    }

    .score {
      font-size: 6rem;
    }
  }
`
