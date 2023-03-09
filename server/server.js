import express from 'express';
import { APP_PORT, DB_URL } from './config';
const app = express();
import routes from './routes';
import mongoose from 'mongoose';
import cors from 'cors';

// Database connection
mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('DB connected...');
});

app.use(cors());
app.use(express.json());
app.use('/api', routes);
app.use('/', (req, res) => {


    res.send(`
  <h1>Welcome to E-commerce Rest APIs</h1>
  You may contact me <a href="https://malay-thakkar.github.io/website/website/index.html">here</a>
  Or You may reach out to me for any question related to this Apis: its.malaythakkar@gmail.com <br/>
  E-Voting DAPP
  `);
});


const PORT = process.env.PORT || APP_PORT;
app.listen(PORT, () => console.log(`Listening on port ${PORT}.`));