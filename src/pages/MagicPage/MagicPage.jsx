import { Link } from "react-router-dom";

const MagicPage = () => {
    return (
        <div className="flex justify-center mt-10">
            <Link to={'/magic-page'}>
                <button className="btn btn-outline btn-error">Click here to see the magic</button>
            </Link>
        </div>
    );
};

export default MagicPage;