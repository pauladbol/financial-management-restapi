import { getAllUsers, getUser, postUser, putUser } from '../controllers/users';

module.exports = (app) => {

    app.get('/users', async (req, res) => {
        try {
            const allUsers = await getAllUsers();
            res.status(200).send(allUsers);
        } catch (error) {
            res.status(500).send(error.message);
        }
    });

    app.get('/users/:id', async (req, res) => {
        try {
            const user = await getUser(req.params.id);
            res.status(200).send(user);
        } catch (error) {
            res.status(500).send(error.message);
        }
    });

    app.post('/users', async (req, res) => {
        const user = await postUser(req.body);
        console.log(user);
        res.status(200).send(user);
    });

    app.put('/users/:id', async (req, res) => {
        res.status(501).send('Not Implemented');
    });
    
}