// Imports
import './App.css'
import BusinessList from './components/BusinessList/BusinessList.jsx'
import Searchbar from './components/Searchbar/Searchbar.jsx'
import { useState } from 'react';
import Yelp from './util/Yelp.js';


  




// Define the app component to be rendered
function App() {
  const [businesses, setBusinesses] = useState([]);

  const handleSearch = (term, location, sortBy) => {
    Yelp.search(term, location, sortBy).then(businesses => {
      setBusinesses(businesses);
    });
  }
  return (
    <div>
      <div className='header'>
      <div className='content'>
        <h1>Ravenous</h1>
        <Searchbar onSearch={handleSearch} />
     </div>
      </div>
      <br />
      
      <div className='cards'>
        <BusinessList businesses={businesses} />
        </div>
    </div>

  )
}

// Export
export default App
