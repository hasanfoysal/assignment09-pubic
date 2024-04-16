import AboutUs from "../About Us/AboutUs";
import Banner from "../Banner/Banner";
import Login from "../Login/Login";
import Residential from "../ResidentialArea/Residential";



const Home = () => {

    // const details = useLoaderData();
    return (
        <div>
         <Banner></Banner>
         <AboutUs></AboutUs>
         <Residential></Residential>
         <Login></Login>
         
        
        
       
        </div>
    );
};

export default Home;