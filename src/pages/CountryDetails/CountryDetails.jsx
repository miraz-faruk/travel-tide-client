import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const CountryDetails = () => {
    const { countryName } = useParams();
    const [touristSpots, setTouristSpots] = useState([]);
    
    useEffect(() => {
        // Fetch tourist spots for the specific country
        fetch(`http://localhost:5001/tourist-spots/${countryName}`)
            .then(response => response.json())
            .then(data => setTouristSpots(data))
            .catch(error => console.error('Error fetching tourist spots:', error));
    }, [countryName]);

    return (
        <div className="container mx-auto p-8">
            
            <h2 className="text-3xl font-bold mb-6">Tourist Spots in {countryName}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {touristSpots.map(spot => (
                    <div key={spot._id} className="bg-white shadow-lg rounded-lg p-4">
                        <img src={spot.image} alt={spot.spotName} className="w-full h-40 object-cover rounded-md mb-4" />
                        <h3 className="text-xl font-semibold mb-2">{spot.spotName}</h3>
                        <p className="text-gray-600 mb-2"><strong>Location:</strong> {spot.location}</p>
                        <p className="text-gray-600 mb-2"><strong>Description:</strong> {spot.description}</p>
                        <p className="text-gray-600 mb-2"><strong>Cost:</strong> {spot.cost}</p>
                        <p className="text-gray-600 mb-2"><strong>Seasonality:</strong> {spot.seasonality}</p>
                        <Link to={`/spot-details/${spot._id}`} className="btn btn-primary mt-4">View Details</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CountryDetails;
