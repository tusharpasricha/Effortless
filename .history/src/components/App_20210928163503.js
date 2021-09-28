import React from "react"
import { Container } from "react-bootstrap"
import Page1 from "./page1"
import Page2 from "./page2"
function App() {
  return (
    <Container>
      <div>
        <Page1></Page1>
        <Page2></Page2>
      </div>
    </Container>
  )
}

export default App