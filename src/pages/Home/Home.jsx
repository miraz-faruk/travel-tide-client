import MagicPage from "../MagicPage/MagicPage";
import Slider from "../Shared/Slider/Slider";
import TouristsSpots from "../Shared/TouristsSpots/TouristsSpots";


const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <TouristsSpots></TouristsSpots>
            <MagicPage></MagicPage>
        </div>
    );
};

export default Home;