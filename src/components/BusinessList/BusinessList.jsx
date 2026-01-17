import Business from '../Business/Business.jsx';

function BusinessList({ businesses }) {
  return (
    <div className="BusinessList">
      {businesses.map(business => (
        <Business business={business} />
      ))}
    </div>
  );
}

export default BusinessList;