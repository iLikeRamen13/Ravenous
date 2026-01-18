// Imports
import './Searchbar.css'
import { useState, useEffect} from 'react';
import yelpSearch from '../../util/Yelp.js';

// Define the searchbar component
function Searchbar(props) {
    // Initialize a state variable for the search term
    const [searchTerm, setSearchTerm] = useState('');
    const [location, setLocation] = useState('');
    const [sortBy, setSortBy] = useState('best_match');
;
    const handleSubmit = (event) => {
        event.preventDefault();
        props.onSearch(searchTerm, location, sortBy);
    }

    return (
    
    
    <div className='Bar'>
        <div className='filters'>
        
        <div className='Best-Match'>
            <button className={sortBy === 'best_match' ? 'active' : ''} onClick={() => setSortBy('best_match')}>Best Match</button>
        </div>

        <div className='Highest-Rated'>
            <button className={sortBy === 'rating' ? 'active' : ''} onClick={() => setSortBy('rating')}>Highest Rated</button>
        </div>

        <div className='Most-Reviewed'>
            <button className={sortBy === 'review_count' ? 'active' : ''} onClick={() => setSortBy('review_count')} >Most Reviewed</button>
        </div>
        </div>

        <br />
        <form onSubmit={handleSubmit}>
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
        
        
        <div className='search'>
            <button type='submit'>Let's Go!</button>
        </div>
        
        </form>
    </div>
    
 
    )
}

// Export
export default Searchbar;