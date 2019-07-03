import app from './config/custom-express';

app.get('/:id', (request, response) => {
    response.status(200).send('Financial Management REST API');
})