import Business from '../Business/Business.jsx';

function BusinessList({ businesses }) {
  return (
    <div className="BusinessList">
      {businesses.map(business => (
        <Business key={business.id} business={business} />
      ))}
    </div>
  );
}

export default BusinessList;