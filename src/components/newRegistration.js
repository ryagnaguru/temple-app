import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import isEmail from "validator/lib/isEmail";
import { isValidPassword, isValidPhoneNumber } from "../utilities/validator";


const allProperties = {
    phoneNumber: false,
    email: false,
    password: false,
}

function NewRegistration() {
    
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [password, setPassword] = useState("");
    const [_confirmPassword, setConfirmPassword] = useState("");
    const [err, setErr] = useState(false);
    const [errField, setErrField] = useState("");
    const [disableButton, setDisableButton] = useState(true);

    function resetError(callBack, value) {
        setErr(false);
        setErrField("");
        callBack(value);
    }
    
    function triggerError(fieldName) {
        setErr(true);
        setErrField(fieldName);
    }

    
    var setProperties = (event) => {
        if (event.target.id === "formBasicFirstName")
            setFirstName(event.target.value);
        if (event.target.id === "formBasicLastName")
            setLastName(event.target.value);
        if (event.target.id === "formBasicAddress")
            setAddress(event.target.value);
        if (event.target.id === "formBasicPhoneNumber") {
            const phoneNumber = event.target.value;
            if (!isValidPhoneNumber(phoneNumber)) {
                triggerError(" Phone number ");
                allProperties.phoneNumber = false;
            } else {
                resetError(setPhoneNumber, phoneNumber);
                allProperties.phoneNumber = true;
            }
        }
        if (event.target.id === "formBasicEmail") {
            const email = event.target.value;
            if (!isEmail(email)) {
                triggerError(" Email address ");
                allProperties.email = false;
            } else {
                resetError(setEmail, email);
                allProperties.email = true;
            }
        }
        if (event.target.id === "formBasicPassword") {
            const pwd = event.target.value;
            if (pwd === undefined || pwd === "") {
                triggerError(" Password ");
            } else {
                resetError(setPassword, pwd);
            }
        }
        if (event.target.id === "formBasicConfirmPassword") {
            const confirmPwd = event.target.value;
            if (!isValidPassword(password, confirmPwd)) {
                triggerError(" Password ");
                allProperties.password = false;
            } else {
                resetError(setConfirmPassword, confirmPwd);
                allProperties.password = true;
            }
        }     
        setDisableButton(!(allProperties.email && allProperties.phoneNumber && allProperties.password));       
    }

    function saveUserDetails(e){
        e.preventDefault();
        const userObj = {
            firstName,
            lastName,
            address,
            email,
            phoneNumber,
            password
        }
        console.log( " --- ", userObj);
        setDisableButton(true);
    }

  return (
      <Form onSubmit={saveUserDetails}>
        <h3> New Registration. </h3>
        <br/>
        { err && <span color="red"> Please provide valid detail for {errField}</span> }
        <Form.Group className="mb-3" controlId="formBasicFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" required={true} placeholder="Enter First Name" onChange={setProperties}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" required={true} placeholder="Enter Last Name" onChange={setProperties}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="tel" required={true} placeholder="Enter Phone Number" onChange={setProperties}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" required={true} placeholder="Enter email" onChange={setProperties}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicAddress"> 
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" required={true} placeholder="Enter Address" onChange={setProperties}/>
            <Form.Text className="text-muted">
                Prasadham will be delivered to this address.
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" required={true} placeholder="Password" onChange={setProperties}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" required={true} placeholder="Confirm Password" onChange={setProperties}/>
        </Form.Group>
      
        <Button variant="primary" type="submit" disabled={disableButton} >
            Submit
        </Button>
        </Form>
  );
}

export default NewRegistration;
