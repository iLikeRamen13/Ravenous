const apiKey = '<Your Yelp API Key Here>';

const Yelp = {
  search: async (term, location, sortBy) => {
    const endpoint = `https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`;

    const response = await fetch(endpoint, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    });

    if (!response.ok) {
      throw new Error('Yelp request failed');
    }

    const jsonResponse = await response.json();

    if (!jsonResponse.businesses) {
      return [];
    }

    return jsonResponse.businesses.map(business => ({
      id: business.id,
      imageSrc: business.image_url,
      name: business.name,
      address: business.location.address1,
      city: business.location.city,
      state: business.location.state,
      zipCode: business.location.zip_code,
      category: business.categories[0].title,
      rating: business.rating,
      reviewCount: business.review_count
    }));
  }
}

export default Yelp;