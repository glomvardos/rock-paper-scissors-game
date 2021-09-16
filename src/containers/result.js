import styled from 'styled-components'

const Result = () => {
  return (
    <Container>
      <LeftCol>
        <h2>You Picked</h2>
      </LeftCol>
      <RightCol>
        <h2>The House Picked</h2>
      </RightCol>
    </Container>
  )
}

export default Result

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`
const LeftCol = styled.div``
const RightCol = styled.div``
