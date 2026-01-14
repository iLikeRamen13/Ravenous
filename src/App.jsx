// Imports
import './App.css'
import BusinessList from './components/BusinessList/BusinessList.jsx'
import Searchbar from './components/Searchbar/Searchbar.jsx'


// Array of business objects (to simulate Yelp API)
const businesses = [
  {
      imgSrc: 'https://sudachirecipes.com/wp-content/uploads/2025/07/shoyu-ramen-new-thumb.png',
      name: 'Oodles Noodle Bar',
      address: '1234 Noodle St',
      city: 'Flavor Town',
      state: 'CA',
      zipCode: '56789',
      category: 'Japanese',
      rating: 4.5,
      reviewCount: 156
  },
  {
      imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Sushi_platter.jpg/330px-Sushi_platter.jpg',
      name: 'Slappin\' Sushi Place',
      address: '5678 Sashimi Ave',
      city: 'Flavor Town',
      state: 'CA',
      zipCode: '28901',
      category: 'Japanese',
      rating: 4.7,
      reviewCount: 113
  },
    {
      imgSrc: 'https://www.steaksandgame.com/images/Product/medium/chicken-dumplings-recipe-1S-12788.jpg',
      name: 'Dumpling Dynasty',
      address: '42 Dumpling Downtown',
      city: 'Flavor Town',
      state: 'CA',
      zipCode: '92019',
      category: 'Japanese',
      rating: 4.3,
      reviewCount: 204
  }
]


// Define the app component to be rendered
function App() {
  return (
    <div>
      <Searchbar />
      <br />
      <BusinessList businesses={businesses} />
      <BusinessList businesses={businesses} />
    </div>
  )
}

// Export
export default App
