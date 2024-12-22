import { Routes, Route } from 'react-router-dom';
import './App.css';
import CountryList from './components/CountryList';
import CountryInfo from './components/CountryInfo';

function App() {
  return (
    <Routes>
      <Route path="/" element={<CountryList />} />
      <Route path="/country/:countryCode" element={<CountryInfo />} />
    </Routes>
  );
}

export default App;
