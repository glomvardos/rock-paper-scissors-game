import styled from 'styled-components'
import UserChoice from '../components/user-choice'
import bgTriangle from '../assets/bg-triangle.svg'

const Game = () => {
  return (
    <GameContainer>
      <ImgWrapper>
        <UserChoice choice='rock' />
        <UserChoice choice='paper' />
        <UserChoice choice='scissor' />
        <img src={bgTriangle} alt='background icon' />
      </ImgWrapper>
    </GameContainer>
  )
}

export default Game

const GameContainer = styled.section`
  display: flex;
  justify-content: center;
`
const ImgWrapper = styled.div`
  position: relative;

  img {
    width: 190px;

    @media (min-width: 900px) {
      width: 290px;
    }
  }
`
