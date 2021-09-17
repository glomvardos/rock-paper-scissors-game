import { useContext } from 'react'
import styled from 'styled-components'

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
    </Container>
  )
}

export default Result

const Container = styled.div`
  margin-top: 30%;
  display: flex;
  justify-content: space-between;
  color: #ffffff;
  text-transform: uppercase;

  h2 {
    font-size: 1.45rem;
    letter-spacing: 0.11rem;
  }
`
const LeftCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-left: 2rem;

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
`
const RightCol = styled(LeftCol)``

const WrapperLeft = styled.div`
  position: absolute;
  bottom: 35px;
`

const WrapperRight = styled.div`
  position: absolute;
  bottom: 35px;
`
