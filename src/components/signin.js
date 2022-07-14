import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import FirebaseAuthService from "../service/firebaseAuthService";
import { useNavigate } from "react-router-dom";


function SignIn() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

    var onsubmit = async (e) => {
      try{
        e.preventDefault();
        await FirebaseAuthService.authoriseUser(username, password);
        setUsername("");
        setPassword("");
        nav("/");
      } catch(ex) {
        alert(ex.message);
      }
    }

  return (
    <>
      <Form>
        <h3> SIGN IN </h3>
        <br/>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" required placeholder="Enter email" onChange={(e) => setUsername(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" required placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={onsubmit}>
            Submit
        </Button>
        </Form>
        <br/>
        <Link to="/newRegistration"> New Registration </Link>
    </>
  );
}

export default SignIn;
