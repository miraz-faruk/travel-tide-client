import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const TouristsSpots = () => {
  const [countries, setCountries] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5001/countries")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCountries(data);
      })
      .catch((error) => console.error("Error fetching countries:", error));
  }, []);

  const handleCountryClick = (countryName) => {
    navigate(`/country/${countryName}`);
  };

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-4xl font-semibold text-purple-700 text-center mb-10">
        Explore Countries
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {countries.map((country) => (
          <div
            key={country._id}
            className="country-card bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            onClick={() => handleCountryClick(country.name)}
          >
            <img
              src={country.image}
              alt={country.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{country.name}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {country.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TouristsSpots;