import fireBaseApp from "../config/fireBaseConfig";
import { collection, addDoc, getFirestore } from "firebase/firestore"; 


const db = getFirestore(fireBaseApp());

const addUserData = async (userObj) => {
    try {
        return await addDoc(collection(db, 'users'), userObj);
    } catch(err ){
        console.log("Add data - ", err)
        throw err;
    }
}

const FireBaseFireStoreService = {
    addUserData
}

export default FireBaseFireStoreService;