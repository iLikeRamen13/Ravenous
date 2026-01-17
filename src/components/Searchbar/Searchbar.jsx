// Imports
import './Searchbar.css'
import { useState, useEffect} from 'react';

// Define the searchbar component
function Searchbar() {
    // Initialize a state variable for the search term
    const [searchTerm, setSearchTerm] = useState('');
    const [location, setLocation] = useState('');
    const [sortBy, setSortBy] = useState('best-match');
;
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Searching Yelp for ${searchTerm} in ${location} sorted by ${sortBy}`);
    }

    return (
    
    
    <div className='Bar'>
        <div className='filters'>
        
        <div className='Best-Match'>
            <button className={sortBy === 'best-match' ? 'active' : ''} onClick={() => setSortBy('best-match')}>Best Match</button>
        </div>

        <div className='Highest-Rated'>
            <button className={sortBy === 'highest-rated' ? 'active' : ''} onClick={() => setSortBy('highest-rated')}>Highest Rated</button>
        </div>

        <div className='Most-Reviewed'>
            <button className={sortBy === 'most-reviewed' ? 'active' : ''} onClick={() => setSortBy('most-reviewed')} >Most Reviewed</button>
        </div>
        </div>

        <br />

        <div className="Searchbar">
                <input 
                    type="text" 
                    placeholder="Search Restaurants" 
                    id='business-search'
                    onChange={(text) => setSearchTerm(text.target.value)} 
                />
                
                <input 
                    type="text" 
                    placeholder="Where?" 
                    id='location-search' 
                    onChange={(text) => setLocation(text.target.value)}
                />
        </div>
            
            <br />
        <form onSubmit={handleSubmit}>
        
        <div className='search'>
            <button type='submit'>Let's Go!</button>
        </div>
        
        </form>
    </div>
    
 
    )
}

// Export
export default Searchbar;