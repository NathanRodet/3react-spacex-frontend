import React from 'react'
import { Nav } from 'react-bootstrap';

export default function Navigation() {
  return (
    <div>
      <Nav justify variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Launches</Nav.Link>
        </Nav.Item>
      </Nav>
    </div >
  )
}