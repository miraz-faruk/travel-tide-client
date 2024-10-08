import ThemeChange from "../../components/ThemeChange/ThemeChange";
import MagicPage from "../MagicPage/MagicPage";
import Countries from "../Shared/Countries/Countries";
import Slider from "../Shared/Slider/Slider";
import TouristsSpots from "../Shared/TouristsSpots/TouristsSpots";


const Home = () => {
    return (
        <div className="bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen">
            <ThemeChange></ThemeChange>
            <Slider></Slider>
            <TouristsSpots></TouristsSpots>
            <Countries></Countries>
            <MagicPage></MagicPage>
        </div>
    );
};

export default Home;