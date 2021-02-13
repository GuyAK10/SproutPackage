import Head from 'next/head'
import { Card, Button, Modal, Dropdown, DropdownButton,Nav } from 'react-bootstrap'
import React, { useState } from 'react'
import Router from 'next/router'

const index = () => {
  const [modalShow, setModalShow] = useState(false);
  const [packageSubject, setPackageSubject] = useState("Choose Package")

  const fixPackage = (e) => {
    setPackageSubject(e)
  }

  const createPackage = () => {
    Router.push(`/${packageSubject}`)
  }

  const CreatePackageTable = (props) => {
    return (
      <Modal
        {...props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Start Package
          </Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <h4>Subject Name</h4>
          <div className="packageSubject">
            <DropdownButton id="dropdown-basic-button" title={packageSubject} onSelect={(e) => { fixPackage(e) }}>
              <Dropdown.Item eventKey="technology" >technology</Dropdown.Item>
              <Dropdown.Item eventKey="financial" >financial</Dropdown.Item>
              <Dropdown.Item eventKey="marketing" >marketing</Dropdown.Item>
            </DropdownButton>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={createPackage}>Create</Button>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  return (
    <div className="container">
      <Head>
        <title>Sprout Package</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <div className="package-container">
          <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src="/background/financial.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Nav>
              <Nav.Item>
                  <Nav.Link onClick={() => setModalShow(true)}>Add Package</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link  href="/showFinancial">Show Package</Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Body>
          </Card>
          <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src="/background/technology.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Nav>
              <Nav.Item>
                  <Nav.Link onClick={() => setModalShow(true)}>Add Package</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link  href="/showTechnology">Show Package</Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Body>

          </Card>
          <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src="/background/marketing.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Nav>
              <Nav.Item>
                  <Nav.Link onClick={() => setModalShow(true)}>Add Package</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link  href="/showMarketing">Show Package</Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Body>
          </Card>
          <CreatePackageTable
            show={modalShow}
            
            onHide={() => setModalShow(false)}
          />
        </div>
      </main>
    </div>
  )
}
export default index