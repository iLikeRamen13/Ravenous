// Imports
import './Searchbar.css'

// Define the searchbar component
function Searchbar() {
    // Initialize a state variable for the search term
    const [searchTerm, setSearchTerm] = useState('');
    const [location, setLocation] = useState('');
    const [sortBy, setSortBy] = useState('best_match');
    return (
    
    <div>
        <div className='filters'>
        <div className='Best-Match'>
            <button>Best Match</button>
        </div>

        <div className='Highest-Rated'>
            <button>Highest Rated</button>
        </div>

        <div className='Most-Reviewed'>
            <button>Most Reviewed</button>
        </div>
        </div>

        <br />

        <div className="Searchbar">
                <input type="text" placeholder="Search Businesses" id='business-search' />
                <input type="text" placeholder="Where?" id='location-search' />
        </div>
            
            <br />
        
        <div className='search'>
            <button>Let's Go</button>
        </div>
    
    </div>

    )
}

// Export
export default Searchbar;