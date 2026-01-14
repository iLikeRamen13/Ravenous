// Imports
import Ramen from '../../assets/Ramen.webp'
import './Business.css';

const business = {
    imgSrc: Ramen,
    name: 'Ramen restaurant',
    address: '1234 Noodle St',
    city: 'Flavor Town',
    state: 'CA',
    zipCode: '56789',
    category: 'Japanese',
    rating: 4.5,
    reviewCount: 150
};


// Define the business component
function Business() {
    return (
        <div id='business-card'>
            <img src={business.imgSrc} alt='a restaurant' height='350' width='225' id='business-image'/>
            <h5 id='business-name'>{business.name}</h5>
            <h5 id='business-address'>{business.address}</h5>
            <h5 id='business-city'>{business.city}</h5>
            <h5 id='business-state'>{business.state}</h5>
            <h5 id='business-zip-code'>{business.zipCode}</h5>
            <h5 id='business-category'>{business.category}</h5>
            <h5 id='business-rating'>{business.rating} stars</h5>
            <h5 id='business-review-count'>{business.reviewCount} reviews</h5>
        </div>
    )
}


// Export
export default Business;