const express = require('express');
const app = express();

const RouterUser = require('./routes/userRoutes');
const RouterBooks = require('./routes/booksRoutes');
app.use(express.json());

app.get('/', (req,res)=> {
    console.log('get response');
    res.send('API is running...');
})

app.use('/user', RouterUser);
app.use('/book', RouterBooks);
app.listen(3003, () => {
    console.log(`The server is running on 3003`);   
}); 