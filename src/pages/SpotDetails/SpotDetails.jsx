import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SpotDetails = () => {
    const { id } = useParams();
    const [spot, setSpot] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5001/add-tourists-spot/${id}`)
            .then(res => res.json())
            .then(data => {
                setSpot(data)
            });

    }, [id]);

    if (!spot) {
        return <p>Loading...</p>;
    }

    const { _id, image, spotName, country, location, description, cost, seasonality, travelTime, visitors, userEmail, userName } = spot;

    return (
        <div className="p-5">
            <h1 className="text-5xl font-bold text-purple-600 text-center mb-5">{spotName}</h1>
            <div className='md:flex gap-5'>
                <img className="w-full md:w-2/3 max-h-screen mb-5" src={image} alt={spotName} />
                <div className='space-y-3'>
                    <p><strong>ID:</strong> {_id}</p>
                    <p><strong>Country:</strong> {country}</p>
                    <p><strong>Location:</strong> {location}</p>
                    <p><strong>Description:</strong> {description}</p>
                    <p><strong>Cost:</strong> {cost}</p>
                    <p><strong>Seasonality:</strong> {seasonality}</p>
                    <p><strong>Travel Time:</strong> {travelTime}</p>
                    <p><strong>Visitors Per Year:</strong> {visitors}</p>
                    <p><strong>Submitted By:</strong> {userName}</p>
                    <p><strong>User Email:</strong> {userEmail}</p>
                </div>
            </div>
        </div>
    );
};

export default SpotDetails;
