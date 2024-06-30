const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/',(req, res) => {
   res.send('Hello, world!');
})

app.get('/items', (req, res) => {
    res.json({ message: 'Get all items' });
})

app.post('/items', (req, res) => {
    res.json({ message: 'create an items'});
})

app.get('/items/:id', (req, res) => {
    res.json({ message: 'Get with id ${req.params.id}'});
})

app.put('/items/:id', (req, res) => {
    res.json({ message: 'Update with id ${req.params.id}'});
})

app.delete('items/:id', (req, res) => {
    res.json({ message: 'Delete with id ${req.params.id}'});
})

app.use((req, res, next) => {  //custom middleware
   console.log('${req.method} ${req.http://localhost:3000}');
   next();
})

app.listen(PORT, () => {
   console.log('Server is running on port ${http://localhost:3000}');
});