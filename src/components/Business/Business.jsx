import Ramen from '../../assets/Ramen.webp'

function Business() {
    return (
        <div>
            <img src={Ramen} alt='a restaurant' height='350' width='225'/>
            <p id='business-name'>Ramen restaurant</p>
            <p id='business-address'>1234 Noodle St</p>
            <p id='business-city'>Flavor Town</p>
            <p id='business-state'>CA</p>
            <p id='business-zip-code'>56789</p>
            <p id='business-category'>Japanese</p>
            <p id='business-rating'>4.5 stars</p>
            <p id='business-review-count'>150 reviews</p>

        </div>
    )
}

export default Business;