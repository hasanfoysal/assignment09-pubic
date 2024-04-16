import Details from "../Details/Details";
import{useLoaderData} from 'react-router-dom'

const Viewdetails = () => {
    const details = useLoaderData();
    // console.log(details)
    return (
        <div>
            {
                details.map(detail => <Details key={detail.id} detail={detail}>
                </Details>)
            }
        </div>
    );
};

export default Viewdetails;