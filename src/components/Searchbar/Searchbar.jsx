// Imports
import './Searchbar.css'

// Define the searchbar component
function Searchbar() {
    return (
        <div className="Searchbar">
            <input type="text" placeholder="Search Businesses" id='business-search' />
            <input type="text" placeholder="Where?" id='location-search' />
            <br />
            <button>Let's Go</button>
        </div>
    )
}

// Export
export default Searchbar;