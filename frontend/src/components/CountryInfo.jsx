import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CountryInfo = () => {
  const { countryCode } = useParams(); // Get the country code from the URL
  const [countryInfo, setCountryInfo] = useState(null);

  useEffect(() => {
    const fetchCountryInfo = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/countries/${countryCode}`);
        setCountryInfo(response.data);
      } catch (error) {
        console.error('Error fetching country info:', error.message);
      }
    };

    fetchCountryInfo();
  }, [countryCode]);

  if (!countryInfo) return <p>Loading...</p>;

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <h1>{countryInfo.name}</h1>
      <img src={countryInfo.flagUrl} alt={`${countryInfo.name} Flag`} style={{ width: '150px', marginBottom: '20px' }} />

      <h2>Details</h2>
      <p>
        <strong>Official Name:</strong> {countryInfo.officialName}
      </p>
      <p>
        <strong>Region:</strong> {countryInfo.region}
      </p>

      <h2>Border Countries</h2>
      {countryInfo.borders.length > 0 ? (
        <ul>
          {countryInfo.borders.map((border) => (
            <li key={border.countryCode}>{border.commonName}</li>
          ))}
        </ul>
      ) : (
        <p>No border countries available</p>
      )}

      <h2>Population Data</h2>
      {countryInfo.populationData && countryInfo.populationData.length > 0 ? (
        <ul>
          {countryInfo.populationData.map((data) => (
            <li key={data.year}>
              <strong>{data.year}:</strong> {data.value.toLocaleString()}
            </li>
          ))}
        </ul>
      ) : (
        <p>No population data available</p>
      )}
    </div>
  );
};

export default CountryInfo;
