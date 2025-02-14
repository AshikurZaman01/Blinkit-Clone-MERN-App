const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;

const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const helmet = require('helmet');
const dotEnv = require('dotenv');
const connectDB = require('./Config/DBConfig/DBConn');
dotEnv.config();

app.use(cors({
    origin: process.env.FRONTEND_URL.replace(/\/$/, ''),
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}))

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'));
app.use(helmet({
    crossOriginOpenerPolicy: false
}));


app.use('/api/v1/user', require('./Routes/UserRoutes/userRoutes'));


connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);

    })
})



