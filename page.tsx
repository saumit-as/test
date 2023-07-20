"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  InputGroup,
  Modal,
  Row,
} from "react-bootstrap";

const Profile = () => {
  const router = useRouter();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Container className="mt-5 d-flex flex-column gap-5">
      <div className="d-flex gap-3 align-items-center">
        <Button onClick={() => router.back()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-arrow-left"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
            />
          </svg>
        </Button>
        back
      </div>
      <Row
        className=" d-flex justify-content-between align-items-center"
        xs={2}
      >
        <Col className="d-flex align-items-center mb-0 gap-3 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="75"
            height="75"
            fill="currentColor"
            className="bi bi-person-circle"
            viewBox="0 0 16 16"
          >
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            <path
              fill-rule="evenodd"
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
            />
          </svg>
          <div>
            <p className="mb-0">Name</p>
            <p className="mb-0">@name</p>
          </div>
        </Col>
        <Col className="d-flex align-items-center gap-3 justify-content-end">
          <div
            className="d-flex align-items-center gap-3 "
            onClick={handleShow}
            style={{ cursor: "pointer" }}
          >
            Edit Profile
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-pencil-square"
              viewBox="0 0 16 16"
            >
              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
              <path
                fill-rule="evenodd"
                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
              />
            </svg>
          </div>
          <Modal
            className="text-dark"
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Body className="d-flex row gap-3">
              <div className="d-flex justify-content-between">
                <Button onClick={handleClose} variant="dark">
                  Back
                </Button>
              </div>
              <div className="d-flex justify-content-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="100"
                  fill="currentColor"
                  className="bi bi-person-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                  <path
                    fill-rule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                  />
                </svg>
              </div>
              <InputGroup className="mb-3">
                <div className="w-100">
                  <label htmlFor="">Name</label>
                  <Form.Control
                    placeholder="Name"
                    aria-label="Name"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </InputGroup>
              <InputGroup className="mb-3">
                <div className="w-100">
                  <label htmlFor="">Username</label>
                  <Form.Control
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </InputGroup>
              <InputGroup className="mb-3 d-flex justify-content-center">
                <div className="w-100">
                  <label htmlFor="">Describe about yourself</label>
                  <Form.Control
                    as={"textarea"}
                    placeholder="Describe about yourself"
                    aria-label="Describe about yourself"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </InputGroup>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={handleClose} variant="danger">
                Cancel
              </Button>
              <Button>Save</Button>
            </Modal.Footer>
          </Modal>
        </Col>
      </Row>
      <Row>
        <Card>
          <Row>
            <Col xs={8}>
              <Card.Body>
                <Card.Title>KYC STATUS</Card.Title>
                <Card.Text>
                  View Profile
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-arrow-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </Card.Text>
              </Card.Body>
            </Col>
            <Col
              xs={4}
              className="d-flex justify-content-end align-items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                fill="currentColor"
                className="bi bi-person-circle"
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path
                  fill-rule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                />
              </svg>
            </Col>
          </Row>
        </Card>
      </Row>
    </Container>
  );
};

export default Profile;
