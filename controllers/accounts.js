import { listAllAccounts, listAccount } from '../models/users';

export const getAllAccounts = () => {
    return listAllAccounts().then(result => result);
};

export const getAccount = () => {
    return listAccount().then(result => result);
}