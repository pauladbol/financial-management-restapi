import { listAllTransactions, listTransaction } from '../models/transactions';

export const getAllTransactions = () => {
    return listAllTransactions().then(result => result);
};

export const getTransaction = (id) => {
    return listTransaction(id).then(result => result);
};