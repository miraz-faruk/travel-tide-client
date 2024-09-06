import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TouristSpotCard from "../../components/TouristSpotCard/TouristSpotCard";

const CountrySpots = () => {
    const { countryName } = useParams();
    const [spots, setSpots] = useState([]);

    useEffect(() => {
        fetch(`https://travel-tide-server-ce4rhk5sl-miraz-faruks-projects.vercel.app/tourist-spots/${countryName}`)
            .then((res) => res.json())
            .then((data) => {
                setSpots(data);
            })
    }, [countryName]);

    return (
        <div className="container mx-auto mt-10">
            <h2 className="text-4xl font-semibold text-purple-700 text-center mb-10">
                Tourist Spots in {countryName}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {
                    spots.length ? (
                        spots.map((spot) => <TouristSpotCard key={spot._id} spot={spot}></TouristSpotCard>))
                        :
                        (
                            <p>No tourist spots available for this country.</p>
                        )
                }
            </div>
        </div>
    );
};

export default CountrySpots;
