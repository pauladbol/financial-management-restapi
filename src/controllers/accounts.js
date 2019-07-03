import { listAllAccounts, listAccount } from '../models/accounts';

export const getAllAccounts = () => {
    return listAllAccounts().then(result => result);
};

export const getAccount = (id) => {
    return listAccount(id).then(result => result);
}