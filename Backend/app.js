const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;

const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const helmet = require('helmet');
const dotEnv = require('dotenv');
dotEnv.config();

app.use(cors({
    credentials: true,
    origin: process.env.FRONTEND_URL
}))
app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev'));
app.use(helmet({
    crossOriginOpenerPolicy: false
}));

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

