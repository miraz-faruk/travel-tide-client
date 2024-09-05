import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateSpot = () => {
  const { id } = useParams(); // Get spot ID from URL params
  const navigate = useNavigate();
  const [spot, setSpot] = useState(null); // State to hold spot data
  const [formData, setFormData] = useState({
    image: "",
    tourists_spot_name: "",
    country_Name: "",
    location: "",
    description: "",
    average_cost: "",
    seasonality: "",
    travel_time: "",
    totaVisitorsPerYear: "",
  });

  // Fetch spot data when component mounts
  useEffect(() => {
    fetch(`http://localhost:5001/add-tourists-spot/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSpot(data);
        // Set initial form data from the fetched spot data
        setFormData({
          image: data.image,
          tourists_spot_name: data.tourists_spot_name,
          country_Name: data.country_Name,
          location: data.location,
          description: data.description,
          average_cost: data.average_cost,
          seasonality: data.seasonality,
          travel_time: data.travel_time,
          totaVisitorsPerYear: data.totaVisitorsPerYear,
        });
      })
      .catch((error) => console.error("Error fetching spot details:", error));
  }, [id]);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:5001/add-tourists-spot/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then(() => {
        Swal.fire("Updated!", "Tourist spot has been updated.", "success");
        navigate("/my-list"); // Redirect back to My List page
      })
      .catch((error) => {
        console.error("Error updating spot:", error);
        Swal.fire("Error!", "Failed to update tourist spot.", "error");
      });
  };

  // Render form only if spot data is loaded
  if (!spot) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold text-center mb-6">
        Update Tourist Spot
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Image URL"
          className="input input-bordered w-full"
          required
        />
        <input
          type="text"
          name="tourists_spot_name"
          value={formData.tourists_spot_name}
          onChange={handleChange}
          placeholder="Tourist Spot Name"
          className="input input-bordered w-full"
          required
        />
        <input
          type="text"
          name="country_Name"
          value={formData.country_Name}
          onChange={handleChange}
          placeholder="Country Name"
          className="input input-bordered w-full"
          required
        />
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="Location"
          className="input input-bordered w-full"
          required
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Short Description"
          className="textarea textarea-bordered w-full"
          required
        ></textarea>
        <input
          type="number"
          name="average_cost"
          value={formData.average_cost}
          onChange={handleChange}
          placeholder="Average Cost"
          className="input input-bordered w-full"
          required
        />
        <input
          type="text"
          name="seasonality"
          value={formData.seasonality}
          onChange={handleChange}
          placeholder="Seasonality (e.g., summer, winter)"
          className="input input-bordered w-full"
          required
        />
        <input
          type="text"
          name="travel_time"
          value={formData.travel_time}
          onChange={handleChange}
          placeholder="Travel Time (e.g., 7 days)"
          className="input input-bordered w-full"
          required
        />
        <input
          type="number"
          name="totaVisitorsPerYear"
          value={formData.totaVisitorsPerYear}
          onChange={handleChange}
          placeholder="Total Visitors Per Year"
          className="input input-bordered w-full"
          required
        />
        <button type="submit" className="btn btn-primary w-full">
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateSpot;
