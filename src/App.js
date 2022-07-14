import { useState } from "react";
import { Container } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./components/home";
import NewRegistration from "./components/newRegistration";
import SignIn from "./components/signin";
import NavigationBar from "./Navbar";
import FirebaseAuthService from "./service/firebaseAuthService";


function App() {

  const [user, setUser] = useState(null);
  FirebaseAuthService.doesUserSessionExist(setUser);

  return (
    <div className="App">
      <Container>
        <NavigationBar existingUser={user}></NavigationBar>
        <Router>
            <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route exact path="/signIn" element={<SignIn/>}/>
              <Route exact path="/newRegistration" element={<NewRegistration/>}/>
            </Routes>
        </Router>
      </Container>
    </div>
  );
}

export default App;
