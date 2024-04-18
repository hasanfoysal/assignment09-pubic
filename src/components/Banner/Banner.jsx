
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

import CountUp from "react-countup";
const Banner = () => {
    return (
        <div >
            <div className="border-t bg-black text-white border-base-300"></div>
          
<div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full ">
  <div className="hero min-h-screen bg-black">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="/r2.png" className=" w-[300px] h-[300px]  lg:ml-24 rounded-lg shadow-3xl lg:h-[400px] lg:w-[500px]"   data-aos="fade-up-left"
     data-aos-easing="linear"
     data-aos-duration="1500"/>
    <div className="mr-4 ">
      <h1 className="lg:text-5xl text-2xl font-bold m-6 text-yellow-50"  data-aos="fade-up-right"
     data-aos-duration="2000">Discover <br />
    Most Suitable <br />
Property</h1>
      <p className="py-4 pb-8 text-zinc-300 mx-4" data-aos="fade-up"
     data-aos-duration="2500">Find a variety of properties that suit you very easilty 
Forget <br /> all difficulties in finding a residence for you</p>
<div className="lg:flexCenter stats flex-row w-[280px] lg:w-full">
            <div className="flexColCenter stat ">
            <span  className="text-3xl">
                <CountUp start={8800} end={9000} duration={5} /> <span span className="text-amber-500 text-3xl">+</span>
              </span>
              <span className="secondaryText">Premium Product</span>
            </div>

            <div className="flexColCenter stat">
            <span className="text-3xl">
                <CountUp start={1950} end={2000} duration={4} /> <span className="text-amber-500 text-3xl">+</span>
              </span>
              <span className="secondaryText">Happy Customer</span>
            </div>

            <div className="flexColCenter stat">
            <span  className="text-3xl">
                <CountUp end={28} duration={3} /> <span className="text-orange-500 text-3xl" >+</span>
              </span>
              <span className="secondaryText">Awards Winning</span>
            </div>
          </div>

    </div>
  </div>
</div>
    <div className="absolute flex justify-between transform -translate-y-1/2 lg:left-5 left-52  lg:right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
  <div className="hero min-h-screen bg-black">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="/contact.jpg" className="lg:ml-24 rounded-lg shadow-3xl lg:h-[400px] lg:w-[500px] w-[300px] h-[300px]"   data-aos="fade-up-left"
     data-aos-easing="linear"
     data-aos-duration="1500"/>
    <div className="mr-4 " data-aos="fade-up-right"
     data-aos-duration="2000">
      <h1 className="lg:text-5xl text-2xl font-bold m-6 text-yellow-50">Discover <br />
    Most Suitable <br />
Property</h1>
      <p className="py-4 pb-8 text-zinc-300 mx-4">Find a variety of properties that suit you very easilty 
Forget <br /> all difficulties in finding a residence for you</p>
<div className="lg:flexCenter stats flex-row w-[280px] lg:w-full ">
            <div className="flexColCenter stat ">
            <span  className="text-3xl">
                <CountUp start={8800} end={9000} duration={5} /> <span span className="text-amber-500 text-3xl">+</span>
              </span>
              <span className="secondaryText">Premium Product</span>
            </div>

            <div className="flexColCenter stat">
            <span className="text-3xl">
                <CountUp start={1950} end={2000} duration={4} /> <span className="text-amber-500 text-3xl">+</span>
              </span>
              <span className="secondaryText">Happy Customer</span>
            </div>

            <div className="flexColCenter stat">
            <span  className="text-3xl">
                <CountUp end={28} duration={3} /> <span className="text-amber-500 text-3xl" >+</span>
              </span>
              <span className="secondaryText">Awards Winning</span>
            </div>
          </div>

    </div>
  </div>
</div>
    <div className="absolute flex justify-between transform -translate-y-1/2 lg:left-5 lg:right-5 left-52 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
  <div className="hero min-h-screen bg-black">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="/r1.png" className="  lg:ml-24 rounded-lg shadow-3xl lg:h-[400px] lg:w-[500px] w-[300px] h-[300px]"   data-aos="fade-up-left"
     data-aos-easing="linear"
     data-aos-duration="1500"/>
    <div className="mr-4 " data-aos="fade-up-right"
     data-aos-duration="2000">
      <h1 className="lg:text-5xl text-2xl font-bold m-6 text-yellow-50">Discover <br />
    Most Suitable <br />
Property</h1>
      <p className="py-4 pb-8 text-zinc-300 mx-4">Find a variety of properties that suit you very easilty 
Forget <br /> all difficulties in finding a residence for you</p>
<div className="lg:flexCenter stats flex-row w-[280px] lg:w-full ">
            <div className="flexColCenter stat ">
            <span  className="text-3xl">
                <CountUp start={8800} end={9000} duration={5} /> <span span className="text-amber-500 text-3xl">+</span>
              </span>
              <span className="secondaryText">Premium Product</span>
            </div>

            <div className="flexColCenter stat">
            <span className="text-3xl">
                <CountUp start={1950} end={2000} duration={4} /> <span className="text-amber-500 text-3xl">+</span>
              </span>
              <span className="secondaryText">Happy Customer</span>
            </div>

            <div className="flexColCenter stat">
            <span  className="text-3xl">
                <CountUp end={28} duration={3} /> <span className="text-amber-500 text-3xl" >+</span>
              </span>
              <span className="secondaryText">Awards Winning</span>
            </div>
          </div>

    </div>
  </div>
</div>
    <div className="absolute flex justify-between transform -translate-y-1/2 lg:left-5 lg:right-5 left-52 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
  <div className="hero min-h-screen bg-black">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="/r3.png" className=" lg:ml-24 rounded-lg shadow-3xl lg:h-[400px] lg:w-[500px] w-[300px] h-[300px]"   data-aos="fade-up-left"
     data-aos-easing="linear"
     data-aos-duration="1500"/>
    <div className="mr-4 " data-aos="fade-up-right"
     data-aos-duration="2000">
      <h1 className="lg:text-5xl text-2xl font-bold m-6 text-yellow-50">Discover <br />
    Most Suitable <br />
Property</h1>
      <p className="py-4 pb-8 text-zinc-300 mx-4">Find a variety of properties that suit you very easilty 
Forget <br /> all difficulties in finding a residence for you</p>
<div className="lg:flexCenter stats flex-row w-[280px] lg:w-full">
            <div className="flexColCenter stat ">
            <span  className="text-3xl">
                <CountUp start={8800} end={9000} duration={5} /> <span span className="text-amber-500 text-3xl">+</span>
              </span>
              <span className="secondaryText">Premium Product</span>
            </div>

            <div className="flexColCenter stat">
            <span className="text-3xl">
                <CountUp start={1950} end={2000} duration={4} /> <span className="text-amber-500 text-3xl">+</span>
              </span>
              <span className="secondaryText">Happy Customer</span>
            </div>

            <div className="flexColCenter stat">
            <span  className="text-3xl">
                <CountUp end={28} duration={3} /> <span className="text-amber-500 text-3xl" >+</span>
              </span>
              <span className="secondaryText">Awards Winning</span>
            </div>
          </div>

    </div>
  </div>
</div>
    <div className="absolute flex justify-between transform -translate-y-1/2 lg:left-5 lg:right-5 left-52 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>

        </div>
        
    );
};

export default Banner;