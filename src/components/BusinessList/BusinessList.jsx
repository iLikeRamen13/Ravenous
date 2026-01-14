import Business from '../Business/Business.jsx';

function BusinessList({ businesses }) {
  return (
    <div className="BusinessList">
      {businesses.map(business => (
        <Business business={business} key={business.id} />
      ))}
    </div>
  );
}

export default BusinessList;