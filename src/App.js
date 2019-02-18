import React from 'react'
import styled from 'styled-components'

import User from './components/User'

const Container = styled.div`
  margin: 0 auto;
  width: 800px;
`

class App extends React.Component {
  render() {
    return (
      <Container>
        <h1>Learn React REST API</h1>
        <User />
      </Container>
    )
  }
}

export default App
