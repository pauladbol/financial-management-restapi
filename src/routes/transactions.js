import { getAllTransactions, getTransaction } from '../controllers/transactions';

module.exports = (app) => {

    app.get('/transactions', async (req, res) => {
        try {
            const allTransactions = await getAllTransactions();
            res.send(allTransactions);
        } catch (error) {
            res.status(500).send(error.message);
        }
    });

    app.get('/transactions/:id', async (req, res) => {
        try {
            const transaction = await getTransaction(req.params.id);
            res.send(transaction);
        } catch (error) {
            res.status(500).send(error.message);
        }
    });
    
}