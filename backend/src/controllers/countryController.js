const axios = require('axios');

const BASE_NAGER_API = process.env.NAGER_DATE_API;
const BASE_REST_API = process.env.REST_COUNTRIES_API;

// Get available countries
const getAvailableCountries = async (req, res) => {
  try {
    const response = await axios.get(`${BASE_NAGER_API}/AvailableCountries`);
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching available countries:', error.response ? error.response.data : error.message);
    res.status(500).json({ error: error.response ? error.response.data : error.message });
  }
};

// Get country info
const getCountryInfo = async (req, res) => {
  const { countryCode } = req.params;

  try {
    // Fetch country info from Nager API
    const countryInfoResponse = await axios.get(`${BASE_NAGER_API}/CountryInfo/${countryCode}`);
    const { commonName, borders } = countryInfoResponse.data;

    // Fetch detailed country info from Rest Countries API
    const restCountryResponse = await axios.get(`${BASE_REST_API}/alpha/${countryCode}`);
    const restCountryData = restCountryResponse.data[0];

    // Extract relevant data
    const { population, flags, region } = restCountryData;

    res.status(200).json({
      name: commonName,
      officialName: restCountryData.name.official,
      region,
      borders: borders || [],
      populationData: [{ year: '2022', value: population }], // Mocked historical data
      flagUrl: flags.svg, // Use SVG flag from Rest Countries API
    });
  } catch (error) {
    console.error('Error fetching country info:', error.response ? error.response.data : error.message);
    res.status(500).json({ error: 'Error fetching country info' });
  }
};

module.exports = { getAvailableCountries, getCountryInfo };
