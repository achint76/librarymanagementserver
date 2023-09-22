const express = require('express');
const app = express();

const RouterUser = require('./routes/userRoutes');
const RouterBooks = require('./routes/booksRoutes');
const RouterUserdetails = require('./routes/userdetailsRoutes');
const RouterBookdetails = require('./routes/bookdetailsRoutes');
const RouterInventory = require('./routes/inventoryRoutes');
const RouterSignup = require('./routes/signupRoutes');
const RouterLogin = require('./routes/loginRoutes');
const RouterProfile = require('./routes/userprofileRoutes');
app.use(express.json());

app.get('/', (req,res)=> {
    console.log('get response');
    res.send('API is running...');
})

app.use('/user', RouterUser);
app.use('/book', RouterBooks);
app.use('/userdetail', RouterUserdetails);
app.use('/bookdetail', RouterBookdetails);
app.use('/inventory', RouterInventory);
app.use('/user', RouterSignup);
app.use('/user', RouterLogin);
app.use('/user', RouterProfile);

app.listen(3003, () => {
    console.log(`The server is running on 3003`);   
}); 