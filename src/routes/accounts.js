import { getAllAccounts, getAccount } from '../controllers/accounts';

module.exports = (app) => {

    app.get('/accounts', async (req, res) => {
        try {
            const allAccounts = await getAllAccounts();
            res.send(allAccounts);
        } catch (error) {
            res.status(500).send(error.message);
        }
    });

    app.get('/accounts/:id', async (req, res) => {
        try {
            const account = await getAccount(req.params.id);
            res.send(account);
        } catch (error) {
            res.status(500).send(error.message);
        }
    });
    
}