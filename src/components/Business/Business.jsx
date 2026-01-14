// Imports
import './Business.css';


// Define the business component
function Business({ business }) {
    return (
        <div id='business-card'>
            <img src={business.imgSrc} alt='a restaurant' height='200' width='200' id='business-image'/>
            <h3 id='business-name'>{business.name}</h3>
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