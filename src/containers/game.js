import { useContext } from 'react'
import styled from 'styled-components'
import UserChoice from '../components/user-choice'
import bgTriangle from '../assets/bg-triangle.svg'
import { store } from '../context/store'

const Game = () => {
  const { setMyPick, setHousePick } = useContext(store)

  const choiceHandler = e => {
    const houseChoice = ['rock', 'paper', 'scissor']
    const randomNum = Math.floor(Math.random() * 3)
    setMyPick(e.target.alt)
    setHousePick(houseChoice[randomNum])
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
