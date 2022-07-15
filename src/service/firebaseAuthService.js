import fireBaseApp from "../config/fireBaseConfig";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

const auth = getAuth(fireBaseApp());

const authoriseUser = (email, password) => signInWithEmailAndPassword(auth, email, password);
const createUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);
const logOut = () => signOut(auth);
const doesUserSessionExist = (setUser) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user);
    }else{
      setUser(null);
    }
  })
};

const FirebaseAuthService = {
  authoriseUser,
  doesUserSessionExist,
  logOut: logOut,
  createUser: createUser,

}

export default FirebaseAuthService;

