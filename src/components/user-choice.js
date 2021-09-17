import styled from 'styled-components'
import rock from '../assets/icon-rock.svg'
import paper from '../assets/icon-paper.svg'
import scissor from '../assets/icon-scissors.svg'
import { store } from '../context/store'
import { useContext } from 'react'

const UserChoice = ({ choice, position }) => {
  const { setMyPick, gameStateHandler } = useContext(store)

  const choiceHandler = e => {
    setMyPick(e.target.alt)
    gameStateHandler()
  }

  return (
    <UserChoiceContainer position={position} choice={choice}>
      {choice === 'rock' && (
        <ImgWrapper>
          <img onClick={choiceHandler} src={rock} alt='rock' />
        </ImgWrapper>
      )}
      {choice === 'paper' && (
        <ImgWrapper>
          <img onClick={choiceHandler} src={paper} alt='paper' />
        </ImgWrapper>
      )}
      {choice === 'scissor' && (
        <ImgWrapper>
          <img onClick={choiceHandler} src={scissor} alt='scissor' />
        </ImgWrapper>
      )}
    </UserChoiceContainer>
  )
}

export default UserChoice

const UserChoiceContainer = styled.div`
  position: ${({ position }) => (position ? 'relative' : 'absolute')};
  background-color: #ffffff;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  padding: 1rem;
  cursor: pointer;
  box-shadow: var(--box-shadow);
  ${({ choice }) => choice === 'rock' && `border: 12px solid var(--rock);`}
  ${({ choice }) => choice === 'paper' && `border: 12px solid var(--paper);`}
  ${({ choice }) => choice === 'scissor' && `border: 12px solid var(--scissors);`}

  
  ${({ choice, position }) => !position && choice === 'rock' && `bottom: -20%;`}
  ${({ choice, position }) => !position && choice === 'rock' && `left: 18%;`}

  ${({ choice, position }) => !position && choice === 'paper' && `left: -25%;`}
  ${({ choice, position }) => !position && choice === 'paper' && `top: -30%;`}

  ${({ choice, position }) => !position && choice === 'scissor' && `right: -25%;`}
  ${({ choice, position }) => !position && choice === 'scissor' && `top: -30%;`} 
  
  @media (min-width: 900px) {
    width: 180px;
    height: 180px;
    ${({ choice }) => choice === 'rock' && `border: 20px solid var(--rock);`}
    ${({ choice }) => choice === 'paper' && `border: 20px solid var(--paper);`}
    ${({ choice }) => choice === 'scissor' && `border: 20px solid var(--scissors);`}
  }

  &:hover,
  &:focus {
    ${({ choice }) => choice === 'rock' && `box-shadow: 0 0 .5rem .1rem var(--rock);`}
    ${({ choice }) => choice === 'paper' && `box-shadow: 0 0 .5rem .1rem var(--paper);`}
    ${({ choice }) => choice === 'scissor' && `box-shadow: 0 0 .5rem .1rem var(--scissors);`}
  }
`

const ImgWrapper = styled.div`
  width: 45px;
  margin: 0 auto;
  position: relative;
  top: 50%;
  transform: translateY(-50%);

  img {
    max-width: 100%;
  }

  @media (min-width: 900px) {
    width: 65px;
  }
`
