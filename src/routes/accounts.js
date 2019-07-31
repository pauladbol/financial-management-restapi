import { getAllAccounts, getAccount, postAccount } from '../controllers/accounts';

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

    app.post('/accounts', async (req, res) => {
        const account = await postAccount(req.body);
        console.log(account);
        res.status(200).send(account);
    });

    app.put('/accounts/:id', async (req, res) => {
        res.status(501).send('Not Implemented');
    });
    
}