import styled from 'styled-components'
import Modal from './modal'
import { IoMdClose } from 'react-icons/io'

import rules from '../assets/image-rules.svg'

const Rules = ({ showModalHandler }) => {
  return (
    <Modal showModalHandler={showModalHandler}>
      <Container>
        <h2>Rules</h2>
        <IoMdClose onClick={showModalHandler} />
      </Container>
      <Img src={rules} />
    </Modal>
  )
}

export default Rules

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4rem;
  h2 {
    text-transform: uppercase;
    color: var(--dark-text);
    font-size: 2rem;
  }

  svg {
    font-size: 3rem;
    color: #b8baca;
    cursor: pointer;
  }

  @media (min-width: 500px) {
    h2 {
      font-size: 2.9rem;
    }

    svg {
      font-size: 3.5rem;
    }
  }
`

const Img = styled.img`
  max-width: 100%;
`
