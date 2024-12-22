const express = require('express');
const {getAvailableCountries, getCountryInfo} = require ('../controllers/countryController.js')


const router = express.Router();


//route for available countries
router.get('/available', getAvailableCountries);


//route for getting country info
router.get('/:countryCode', getCountryInfo);

module.exports = router;