import { useContext } from 'react'
import styled from 'styled-components'
import PlayAgain from '../components/play-again'

import UserChoice from '../components/user-choice'
import { store } from '../context/store'

const Result = () => {
  const { myPick, housePick } = useContext(store)

  return (
    <Container>
      <LeftCol>
        <WrapperLeft>
          <UserChoice position='relative' choice={myPick} />
        </WrapperLeft>
        <h2>You Picked</h2>
      </LeftCol>
      <RightCol>
        {housePick && (
          <WrapperRight>
            <UserChoice position='relative' choice={housePick} />
          </WrapperRight>
        )}
        <h2>The House Picked</h2>
      </RightCol>

      <PlayAgain />
    </Container>
  )
}

export default Result

const Container = styled.div`
  margin-top: 30%;
  display: grid;
  grid-template-areas:
    'myPick housePick'
    'button button';
  row-gap: 8rem;
  color: #ffffff;
  text-transform: uppercase;

  h2 {
    font-size: 1.45rem;
    letter-spacing: 0.11rem;
  }

  @media (min-width: 500px) {
    justify-content: space-around;
  }

  @media (min-width: 900px) {
    margin-top: 0;
    row-gap: 0;
    grid-template-areas: 'myPick button housePick';
    place-content: center;
    column-gap: 5rem;
    h2 {
      font-size: 2.3rem;
      letter-spacing: 0.11rem;
    }
  }
`
const LeftCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-left: 2rem;
  grid-area: myPick;

  &::before {
    content: '';
    position: absolute;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    width: 90px;
    height: 90px;
    padding: 1rem;
    bottom: -50%;
    transform: translateY(-50%);
  }

  @media (min-width: 900px) {
    width: 200px;
    height: 200px;
    margin-left: 0;
    h2 {
      margin-top: -50px;
    }

    &::before {
      width: 110px;
      height: 110px;
      bottom: 16%;
      transform: translateY(0%);
    }
  }
`
const RightCol = styled(LeftCol)`
  grid-area: housePick;
`

const WrapperLeft = styled.div`
  position: absolute;
  bottom: 35px;

  @media (min-width: 900px) {
    bottom: 0;
  }
`

const WrapperRight = styled(WrapperLeft)``
