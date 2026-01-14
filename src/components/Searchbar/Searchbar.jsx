// Imports
import './Searchbar.css'

// Define the searchbar component
function Searchbar() {
    return (
       <div>
       <div className="Searchbar">
            <input type="text" placeholder="Search Businesses" id='business-search' />
            <input type="text" placeholder="Where?" id='location-search' />
        </div>
        <br />
        <button>Let's Go</button>
        </div>

    )
}

// Export
export default Searchbar;