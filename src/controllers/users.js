import { listAllUsers, listUser, createUser } from '../models/users';

export const getAllUsers = () => {
    return listAllUsers().then(result => result);
};

export const getUser = (id) => {
    return listUser(id).then(result => result);
};

export const postUser = (user) => {
    return createUser().then(result => result);
}

export const putUser = (id) => {
    return updateUser().then(result => result);
}