import { getAllUsers } from '../controllers/users';

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
            const user = await getUser();
            res.send(user);
        } catch (error) {
            res.status(500).send(error.message);
        }
    });
    
}