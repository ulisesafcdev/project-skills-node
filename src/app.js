const express = require('express');
const app = express();

const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

/* **************************************************************************** */

const routes = require('./routes/routes');
app.use(routes);

app.use(express.static(path.join(__dirname, '../public')))
app.use((req, res) => {
    res.sendFile(path.join(__dirname, '../public/404.html'));
})

app.listen(3000, () => {
    console.log('Servidor a la espera de conexiones...');
})