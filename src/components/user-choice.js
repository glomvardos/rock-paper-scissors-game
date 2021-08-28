import styled from 'styled-components'
import rock from '../assets/icon-rock.svg'
import paper from '../assets/icon-paper.svg'
import scissor from '../assets/icon-scissors.svg'

const UserChoice = ({ choice }) => {
  return (
    <UserChoiceContainer choice={choice}>
      {choice === 'rock' && (
        <ImgWrapper>
          <img src={rock} alt='choice icon' />
        </ImgWrapper>
      )}
      {choice === 'paper' && (
        <ImgWrapper>
          <img src={paper} alt='choice icon' />
        </ImgWrapper>
      )}
      {choice === 'scissor' && (
        <ImgWrapper>
          <img src={scissor} alt='choice icon' />
        </ImgWrapper>
      )}
    </UserChoiceContainer>
  )
}

export default UserChoice

const UserChoiceContainer = styled.div`
  position: absolute;
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

  ${({ choice }) => choice === 'rock' && `bottom: -20%;`}
  ${({ choice }) => choice === 'rock' && `left: 18%;`}

  ${({ choice }) => choice === 'paper' && `left: -25%;`}
  ${({ choice }) => choice === 'paper' && `top: -30%;`}

  ${({ choice }) => choice === 'scissor' && `right: -25%;`}
  ${({ choice }) => choice === 'scissor' && `top: -30%;`} 
  
  @media (min-width: 900px) {
    width: 180px;
    height: 180px;
    ${({ choice }) => choice === 'rock' && `border: 20px solid var(--rock);`}
    ${({ choice }) => choice === 'paper' && `border: 20px solid var(--paper);`}
    ${({ choice }) => choice === 'scissor' && `border: 20px solid var(--scissors);`}
  }

  &:hover,
  &:focus {
    ${({ choice }) => choice === 'rock' && `box-shadow:0 0 .5rem .1rem var(--rock);`}
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
    width: 100%;
    height: 100%;
  }

  @media (min-width: 900px) {
    width: 65px;
  }
`
