import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('Listagem de usuários');

    response.json([
        'Diego',
        'Pedro',
        'Miltinho'
    ]);
});

app.listen(3333);