const express = require('express');
const app = express();
const methodOverride = require('method-override');
const itemsRouter = require('./routes/items');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use('/', itemsRouter);

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});