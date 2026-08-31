import 'dotenv/config';
import cors from 'cors';
import express from 'express';

const app=express();


app.use(cors());

app.get('/', (req, res) => {
    return res.send('Recebendo um método GET');
});

app.post('/', (req, res) => {
    return res.send('Recebendo um método POST');
});

app.put('/', (req, res) => {
    return res.send('Recebendo um método PATCH');
});

app.delete('/:id', (req, res) => {
    return res.send(
       `DELETANDO com método HTTP o usuário ${req.params.id}` 
    );
});

app.listen(process.env.PORT, () => {
    console.log(`App listening on port ${process.env.PORT}`)
});

export default app;