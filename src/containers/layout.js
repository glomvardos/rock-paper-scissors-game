import styled from 'styled-components'

const Layout = ({ children }) => {
  return <LayoutContainer>{children}</LayoutContainer>
}

export default Layout

const LayoutContainer = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 3rem;

  @media (min-width: 900px) {
    padding: 4rem;
  }
`
