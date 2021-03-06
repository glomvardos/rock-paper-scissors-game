import { useContext } from 'react'
import styled from 'styled-components'
import UserChoice from '../components/user-choice'
import bgTriangle from '../assets/bg-triangle.svg'
import { store } from '../context/store'

const Game = () => {
  const { setIsChoice, setMyPick, setHousePick } = useContext(store)

  const choiceHandler = choice => {
    const houseChoice = ['rock', 'paper', 'scissor']
    const randomNum = Math.floor(Math.random() * 3)
    setMyPick(choice)

    setTimeout(() => {
      setHousePick(houseChoice[randomNum])
    }, 2000)
    setIsChoice(true)
  }

  return (
    <GameContainer>
      <ImgWrapper>
        <UserChoice choice='rock' onClickHandler={choiceHandler} />
        <UserChoice choice='paper' onClickHandler={choiceHandler} />
        <UserChoice choice='scissor' onClickHandler={choiceHandler} />
        <img src={bgTriangle} alt='background icon' />
      </ImgWrapper>
    </GameContainer>
  )
}

export default Game

const GameContainer = styled.section`
  display: flex;
  justify-content: center;
  opacity: 0;
  animation: game 1200ms ease-out forwards 500ms;

  @keyframes game {
    0% {
      opacity: 0;
    }

    50% {
      opacity: 0.5;
    }

    100% {
      opacity: 1;
    }
  }
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
