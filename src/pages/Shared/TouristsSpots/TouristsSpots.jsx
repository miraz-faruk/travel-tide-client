import { useEffect, useState } from "react";
import TouristsSpot from "../../../components/TouristsSpot/TouristsSpot";


const TouristsSpots = () => {

    const [spots, setSpots] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5001/add-tourists-spot")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setSpots(data);
            })
    }, [])
    return (
        <div className="container mx-auto flex flex-col items-center mt-2 md:mt-10">
            <h2 className="text-4xl font-semibold text-purple-700 text-center mb-10">Tourists Spots</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {
                    spots.map(spot => <TouristsSpot key={spot._id} spot={spot}></TouristsSpot>)
                }
            </div>
        </div>
    );
};

export default TouristsSpots;