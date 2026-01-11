// Imports
import Ramen from '../../assets/Ramen.webp'
import './Business.css';

// Define the business component
function Business() {
    return (
        <div id='business-card'>
            <img src={Ramen} alt='a restaurant' height='350' width='225' id='business-image'/>
            <h5 id='business-name'>Ramen restaurant</h5>
            <h5 id='business-address'>1234 Noodle St</h5>
            <h5 id='business-city'>Flavor Town</h5>
            <h5 id='business-state'>CA</h5>
            <h5 id='business-zip-code'>56789</h5>
            <h5 id='business-category'>Japanese</h5>
            <h5 id='business-rating'>4.5 stars</h5>
            <h5 id='business-review-count'>150 reviews</h5>
        </div>
    )
}


// Export
export default Business;