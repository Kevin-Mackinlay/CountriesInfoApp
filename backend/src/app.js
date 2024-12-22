require ('dotenv').config();
const express = require('express');
const cors = require('cors');
const countryRoutes = require('./routes/countryRoutes');

const app = express();

//middleware
app.use(cors());
app.use(express.json());

//routes
app.use('/api/countries', countryRoutes);

//server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})