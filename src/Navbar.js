import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import FirebaseAuthService from './service/firebaseAuthService';

function NavigationBar({existingUser}) {
  const style = {
      "color":"white"
  }
  var signOut = async () => await FirebaseAuthService.logOut();
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="/">Temple Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
          </Nav>
          <Nav>
            {
              existingUser ?  (
              <NavDropdown title={existingUser.email} id="basic-nav-dropdown">
                <NavDropdown.Item onClick={signOut}>Sign out</NavDropdown.Item>
              </NavDropdown>) : 
            (<Nav.Link href="/signIn">Sign In</Nav.Link>)
            }
          </Nav>
          
        </Navbar.Collapse>
        </Container>
      </Navbar>
      <br/>
      </>
  );
}

export default NavigationBar;
