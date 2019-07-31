import { listAllAccounts, listAccount, createAccount, updateAccount } from '../models/accounts';

export const getAllAccounts = () => {
    return listAllAccounts().then(result => result);
};

export const getAccount = (id) => {
    return listAccount(id).then(result => result);
}

export const postAccount = (account) => {
    return createAccount(account).then(result => result);
}

export const putAccount = (id) => {
    return updateAccount(id).then(result => result);
}