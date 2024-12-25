const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const cookieParser = require("cookie-parser");
const router = require('./routes');
require('dotenv').config();

const app = express();


const allowedOrigins = [
    process.env.FRONTEND_URL_DEV,
    process.env.FRONTEND_URL_PRODUCT
];

app.use(cors({
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true 
}));
app.use(cors({
    origin: [],
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.options('*', cors());
app.use(cookieParser())
router(app);

const PORT = process.env.PORT || 8080;

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log('Connect to mongoose server successfully');
        console.log(`Server is running on port ${PORT}`);
    });
});
