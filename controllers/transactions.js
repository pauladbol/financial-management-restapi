import { listAllTransactions, listTransaction } from '../models/users';

export const getAllTransactions = () => {
    return listAllTransactions().then(result => result);
};

export const getTransaction = () => {
    return listTransaction().then(result => result);
};