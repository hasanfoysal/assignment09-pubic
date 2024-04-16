import { Link } from "react-router-dom";

const Errorpage = () => {
    return (
        <div className="p-24">
            <p className="text-3xl py-3">404 page Error</p>
            <Link to='/'><button className="btn btn-info flex justify-center align-middle">Go back home</button></Link>

        </div>
    );
};

export default Errorpage;