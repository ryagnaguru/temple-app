import FireBaseFireStoreService from "./fireBaseFireStoreService"

const addProfileForUser = async (userObj) => {
    return await FireBaseFireStoreService.addUserData(userObj);
}

const UserManagementService = {
    addProfileForUser,
}

export default UserManagementService;