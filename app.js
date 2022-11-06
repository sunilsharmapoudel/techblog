import express from 'express';
import { engine } from 'express-handlebars';

const app = express();

const PORT = process.env.PORT || 8080;

app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(PORT, () => {
    console.log(`App is running on http://localhost:${PORT}`);
})