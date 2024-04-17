import AboutUs from "../About Us/AboutUs";
import Banner from "../Banner/Banner";
import Login from "../Login/Login";
import Residential from "../ResidentialArea/Residential";
import {Helmet} from "react-helmet";



const Home = () => {

    // const details = useLoaderData();
    return (
        <div>
            <Helmet>
                
                <title>Home</title>
               
            </Helmet>
         <Banner></Banner>
         <AboutUs></AboutUs>
         <Residential></Residential>
         <Login></Login>
         
        
        
       
        </div>
    );
};

export default Home;