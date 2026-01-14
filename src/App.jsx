// Imports
import './App.css'
import BusinessList from './components/BusinessList/BusinessList.jsx'
import Searchbar from './components/Searchbar/Searchbar.jsx'

// Define the app component to be rendered
function App() {
  return (
    <div>
      <Searchbar />
      <br />
      <BusinessList />
    </div>
  )
}

// Export
export default App
