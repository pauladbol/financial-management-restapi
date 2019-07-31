import { listAllTransactions, listTransaction, createTransaction, updateTransaction } from '../models/transactions';

export const getAllTransactions = () => {
    return listAllTransactions().then(result => result);
};

export const getTransaction = (id) => {
    return listTransaction(id).then(result => result);
};

export const postTransaction = (transaction) => {
    return createTransaction(transaction).then(result => result);
}

export const putTransaction = (id) => {
    return updateTransaction(id).then(result => result);
}