import axios from "axios";
import { Navbar } from "../components/Navbar";
import { useState, useEffect } from "react";
import { Button } from "../components/Button";
import { Loader2 } from "lucide-react";

export const MainList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchStartups = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/startups/getdata`);
        setData(res.data);
      } catch (err) {
        console.error("Error fetching startups:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchStartups();
  }, []);

  const filteredData = data.filter((startup) =>
    startup.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <div className="flex flex-col justify-center items-center"> <Loader2/></div>;

  return (
    <div className="flex flex-col justify-center">
      <Navbar />

      <div className="flex justify-center mt-10 mb-10">
        <p className="text-4xl text-center max-w-3xl">
          Find startups to invest or add your startups to get funding
        </p>
      </div>

    <div className="flex flex-col justify-center items-center w-full">
        <div className="flex items-center relative gap-2 mb-4">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for startups..."
            className="border-gray-200 border-2 px-10 bg-transparent text-black placeholder-gray-400 text-lg py-3 focus:outline-none rounded"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-gray-600 absolute ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
        <div className="bg-gradient-to-br hover:scale-110 transition-all ease-in from-blue-400 to-purple-300 p-2 rounded-md">
         <button onClick={()=>{
          alert("comming soon")
         }}>Add your startup +</button>
        </div>

      <div className="flex flex-col gap-6 p-6 w-2/3 mx-auto">
  {filteredData.length > 0 ? (
    filteredData.map((startup) => (
      <div
        key={startup._id}
        className=" border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
      >
        {/* Header Section */}
        <div className="mb-4 ">
          <h3 className="text-2xl font-bold underline text-gray-600 mb-2">
            {startup.name}
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {startup.description}
          </p>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          {/* Founders */}
          {startup.founders && startup.founders.length > 0 && (
            <div>
              <span className="font-bold text-gray-700">Founders:</span>
              <p className="text-gray-600 mt-1">
                {startup.founders.join(', ')}
              </p>
            </div>
          )}

          {/* Founding Year */}
          {startup.foundingYear && (
            <div>
              <span className="font-bold text-gray-700">Founded:</span>
              <p className="text-gray-600 mt-1">{startup.foundingYear}</p>
            </div>
          )}

          {/* Industry */}
          {startup.industry && (
            <div>
              <span className="font-bold text-gray-700">Industry:</span>
              <p className="text-gray-600 mt-1">{startup.industry}</p>
            </div>
          )}

          {/* Funding */}
          {startup.funding && (
            <div>
              <span className="font-bold text-gray-700">Funding:</span>
              <p className="text-gray-600 mt-1">{startup.funding}</p>
            </div>
          )}
        </div>

        {/* Investors */}
        {startup.investors && startup.investors.length > 0 && (
          <div className="mt-4 flex flex-col sm:flex-row justify-between  pt-4 border-t border-gray-200">
            <div>

            
            <span className="font-medium text-gray-700">Investors:</span>
            <p className="text-gray-600 mt-1">
              {startup.investors.join(', ')}
            </p>
             </div>
             <div className="mt-4 sm:mt-2 md:mt-0">
<Button className="" text={ "Contact/Invest"}></Button>
             </div>
            
          </div>
        )}

        {/* Timestamps
        <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between text-xs text-gray-500">
          {startup.createdAt && (
            <span>Created: {new Date(startup.createdAt).toLocaleDateString()}</span>
          )}
          {startup.updatedAt && (
            <span>Updated: {new Date(startup.updatedAt).toLocaleDateString()}</span>
          )}
        </div> */}
      </div>
    ))
  ) : (
    <div className="text-center py-12">
      <p className="text-gray-500 text-lg">No startups found.</p>
    </div>
  )}
</div>
      </div>
    </div>
  );
};
