import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

const FunctionForm = () => {
  const [data, handleData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [record, setRecord] = useState([]);

  const HandleData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    handleData({ ...data, [name]: value });
  };
  const handleClick = (e) => {
    e.preventDefault();
    console.log("This is the Functional Component form" , data);
    handleData({ name: "", email: "", password: ""});

  };

  return (
    <Container>
      <Col md={7}>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              value={data.name}
              name="name"
              onChange={HandleData}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={data.email}
              name="email"
              onChange={HandleData}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={data.password}
              name="password"
              onChange={HandleData}
            />
          </Form.Group>
          <Form.Group className="mb-3">
          </Form.Group>
          <Button variant="primary" type="submit" onClick={handleClick}>
            Submit
          </Button>
        </Form>
      </Col>
    </Container>
  );
};
export default FunctionForm;
