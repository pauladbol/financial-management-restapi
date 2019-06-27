import { listAllUsers, listUser } from '../models/users';

export const getAllUsers = () => {
    return listAllUsers()
};

export const getUser = () => {
    return listUser().then(result => result);
};