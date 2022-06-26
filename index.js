import express from 'express';
import bodyParser from 'body-parser';

import footballPlayersRoutes from './routes/FootballPlayerRoutes.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/players', footballPlayersRoutes);

app.get('/', (req, res) => {
    res.send('Home page');
    console.log('You are on the homepage')
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
