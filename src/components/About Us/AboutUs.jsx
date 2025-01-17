import {Helmet} from "react-helmet";
const AboutUs = () => {
    return (
        <div data-aos="fade-up" data-aos-duration='1000'>
            <Helmet>
               
                <title>About Us</title>
                
            </Helmet>
            <div className="hero min-h-screen bg-base-200 lg:my-10">
  <div className="hero-content flex-col lg:flex-row space-x-10 lg:space-x-20">
    <img src="/1600w-CSP1sL3K9x0.webp" className="lg:w-[430px] lg:h-[420px] rounded-lg shadow-2xl lg:ml-10 ml-5" />
  
    <div className="join join-vertical w-full mr-6">
        <div className=" lg:mb-14">
            <h1 className="text-3xl text-orange-500 font-bold">Our Value</h1>
            <h2 className="text-4xl text-sky-800 my-2">
Our Value
Value We Give to You</h2>
<p className="text-gray-500 my-2">We always ready to help by providijng the best services for you. <br />
We beleive a good blace to live can make your life better</p>
        </div>
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" defaultChecked /> 
    <div className="collapse-title text-xl font-medium">
    Best interest rates on the market
    </div>
    <div className="collapse-content"> 
      <p>Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
    Prevent unstable prices
    </div>
    <div className="collapse-content"> 
      <p>Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
    Best price on the market
    </div>
    <div className="collapse-content"> 
      <p>Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.</p>
    </div>
  </div>
</div>
  </div>
</div>
        </div>
    );
};

export default AboutUs;