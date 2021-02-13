import Head from 'next/head'
import { Modal, Button, DropdownButton, Dropdown } from 'react-bootstrap'
import {Edit,Add} from '@material-ui/icons';
import React, { useContext, useState } from 'react'
import useFetchUrl from '../utils/custom'
const Technology = () => {
  const [modalShow, setModalShow] = useState(false);
  // const getUrl = useFetchUrl({type:'get'});
  // const postUrl = useFetchUrl({type:'post'});
  // const delUrl = useFetchUrl({type:'del'});
  const AddSubjectPackage = (props) => {
    return (
      <Modal
        {...props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Start Subject
          </Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <h4>Subject Name</h4>
          <div className="technology-subject">
            <input></input>
            <div className="technology-free">
              <p>Free (ทดลองใช้)</p><br />
              <p>Free</p>
            </div>
            <div className="technology-plus">
              <p>PLUS (ขนาดเล็ก)</p>
              <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                <Dropdown.Item >มี</Dropdown.Item>
                <Dropdown.Item >ไม่มี</Dropdown.Item>
              </DropdownButton>
            </div>
            <div className="technology-premium">
              <p>PREMIUM (ขนาดกลาง)</p>
              <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                <Dropdown.Item >มี</Dropdown.Item>
                <Dropdown.Item >ไม่มี</Dropdown.Item>
              </DropdownButton>
            </div>
            <div className="technology-bisiness">
              <p>BUSINESS (ขนาดธุรกิจ)</p>
              <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                <Dropdown.Item >มี</Dropdown.Item>
                <Dropdown.Item >ไม่มี</Dropdown.Item>
              </DropdownButton>
            </div>
            <div className="technology-enterpise">
              <p>ENTERPISE (ไม่จำกัด)</p>
              <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                <Dropdown.Item >มี</Dropdown.Item>
                <Dropdown.Item >ไม่มี</Dropdown.Item>
              </DropdownButton>
            </div>
            <div className="technology-remake">
              <p>REMAKE (ข้อจำกัดในบริการ)</p>
              <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                <Dropdown.Item >มี</Dropdown.Item>
                <Dropdown.Item >ไม่มี</Dropdown.Item>
              </DropdownButton>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button >Add</Button>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  return (
    <div className="technology">
      <Head>
        <title>Sprout Package</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="technology-container">
        <div className="technology-title">
          <p>title:packageType</p>
          <Edit/>
        </div>
        <div className="technology-menu">
          <div className="technology-privilege">
            <p>PRIVILEGE (สิทธิพิเศษ)</p>
            <br />
          </div>
          <div className="technology-free">
            <p>Free (ทดลองใช้)</p>
            <p>Free</p>
          </div>
          <div className="technology-plus">
            <p>PLUS (ขนาดเล็ก)</p>
            <p>price<Edit/></p>
          </div>
          <div className="technology-premium">
            <p>PREMIUM (ขนาดกลาง)</p>
            <p>price<Edit/></p>
          </div>
          <div className="technology-bisiness">
            <p>BUSINESS (ขนาดธุรกิจ)</p>
            <p>price<Edit/></p>
          </div>
          <div className="technology-enterpise">
            <p>ENTERPISE (ไม่จำกัด)</p>
            <p>price<Edit/></p>
          </div>
          <div className="technology-remake">
            <p>REMAKE (ข้อจำกัดในบริการ)</p>
            <p>price<Edit/></p>
          </div>
        </div>
        <div className="technology-detail">
         <label variant="primary" onClick={() => setModalShow(true)}><Add /> Add Subject</label> 
          <AddSubjectPackage
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </div>
      </div>
    </div>
  )
}
export default Technology