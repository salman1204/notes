import { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Header from '../components/Header'
import NoteLists from '../components/NoteLists'
import Sidebar from '../components/Sidebar'

export default function Home() {
  
  useEffect(() => {
    !localStorage.getItem('list') &&
      localStorage.setItem('list', JSON.stringify([]))
  }, [])

  return (
    <Container fluid>
      <Row>
        <Col md={1}>
          <Sidebar />
        </Col>
        <Col>
          <Row>
            <Header />
          </Row>
          <Row>
            <NoteLists />
          </Row>
        </Col>
      </Row>
    </Container>
  )
}
