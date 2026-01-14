// Imports 
import Business from "../Business/Business";
import './BusinessList.css';

// Define the business list component
function BusinessList() {
    return (
        <div className="BusinessList">
            <Business />
            <Business />
            <Business />
            <Business />
            <Business />
            <Business />
        </div>
    );
}

// Export
export default BusinessList;    