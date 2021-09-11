import ReactDOM from 'react-dom'

import styled from 'styled-components'

const Modal = ({ children, showModalHandler }) => {
  const overlay = document.getElementById('overlay')

  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClick={showModalHandler} />, overlay)}
      {ReactDOM.createPortal(<ModalContainer>{children}</ModalContainer>, overlay)}
    </>
  )
}

export default Modal

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 10;
`

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 20;
  background-color: white;
  max-width: 310px;
  width: 100%;
  padding: 3.3rem;
  display: flex;
  flex-direction: column;
  border-radius: 1.2rem;

  @media (min-width: 500px) {
    max-width: 400px;
  }
`
