import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useState } from "react";

function UserForm(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [experience, setExperience] = useState("");
  const [lvl, setLvl] = useState("");

  const usernameOnChangeHandle = (event) => {
    setUsername(event.target.value);
  };
  const emailOnChangeHandle = (event) => {
    setEmail(event.target.value);
  };
  const experienceOnChangeHandle = (event) => {
    setExperience(event.target.value);
  };
  const levelOnChangeHandle = (event) => {
    setLvl(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const data = {
      username: username,
      email: email,
      experience: experience,
      lvl: lvl,
    };

    props.onAddUser(data);
    handleClose();
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add User
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add User Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form id="userForm" onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                onChange={usernameOnChangeHandle}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={emailOnChangeHandle}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formExperience">
              <Form.Label>Experience</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter experience"
                onChange={experienceOnChangeHandle}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formLevel">
              <Form.Label>Level</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter level"
                onChange={levelOnChangeHandle}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" type="submit" form="userForm">
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UserForm;
