import express from 'express';
import users from '../routes/users';
import transactions from '../routes/transactions';
import accounts from '../routes/accounts';
import { json, urlencoded } from 'body-parser';

const app = express();
const port = 3000;

app.use(json());
app.use(
  urlencoded({
    extended: true,
  })
);

users(app);
transactions(app);
accounts(app);

app.listen(port, () => {
    console.log(`App running on port ${port}.`);
});

export default app;