import { Navbar } from "../components/Navbar";
import { Button } from "../components/Button";
import { Box } from "lucide-react";
import { Boxinfo } from "../components/Boxinfo";
export const Home = () => {
  return (<>

    <div className="home   ">
      <div><Navbar /></div>
      <div>

        <div className="floating-shapes"></div>
        <div className="floating-elements">
          <div className="element"></div>
          <div className="element"></div>
          <div className="element"></div>
          <div className="element"></div>
          <div className="element"></div>
          <div className="element"></div>
          <div className="element"></div>
          <div className="element"></div>
          <div className="element"></div>
        </div>
      </div>
      <div className="flex flex-col  items-center p-4  text-center">

 
        <div className=" lg:w-1/3">
          <h1 className="  stagger-1 text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"> we sky rocket your startup</h1>
        </div>
        <div className=" w-1/2 sm:w-3/4 md:w-1/2 lg:w-1/2 text-gray-700 text-lg">
          <p>Strategic consulting and digital solutions that drive growth, optimize operations, and transform your vision into reality.</p>
        </div>
        <div>
         
        </div>
        <div className=" gap-2 flex mt-4 flex-col md:flex-row justify-center">
          <Button  text="Get Started" className="px-24" />
          <Button  text="Learn More" className="gradient-text border-gray-200 border-2" />
        </div>
      </div>
   

      <div className="flex justify-center items-center gap-4 mt-10 flex-wrap">
        <Boxinfo number={"100+"} description={"Projects Completed"} />
        <Boxinfo number={"50+"} description={"Happy Clients"} />
        <Boxinfo number={"10+"} description={"Years of Experience"} />
      </div>
     

    </div>
       <div className="section-divider"></div>
      </>
  );
}