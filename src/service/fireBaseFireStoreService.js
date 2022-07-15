import fireBaseApp from "../config/fireBaseConfig";
import { collection, addDoc, getFirestore, getDocs, query, where } from "firebase/firestore"; 


const db = getFirestore(fireBaseApp());

const addUserData = async (userObj) => {
    try {
        return await addDoc(collection(db, 'users'), userObj);
    } catch(err ){
        console.log("Add data - ", err)
        throw err;
    }
}

const getAllUserData = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
        });
    } catch (err) {
        console.log("getAllUserData - ", err)
    }
}

const getUserData = async (uid) => {
    try {
        const userQuery = query(collection(db, "users"), where("uid", "==", uid));
        const querySnapshot = await getDocs(userQuery);
        const userContribution = [];
        querySnapshot.forEach((doc) => {
            if( doc.data().contribution){
                userContribution.push(doc.data().contribution);
            }
        });
        return userContribution;
    } catch (err) {
        console.log("getUserData - ", err)
    }
}

const FireBaseFireStoreService = {
    addUserData,
    getAllUserData,
    getUserData
}

export default FireBaseFireStoreService;