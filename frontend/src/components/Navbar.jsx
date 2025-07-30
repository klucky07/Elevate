import { TrendingUp } from "lucide-react";
import { Button } from "../components/Button";


export const Navbar = () => {
  return (
    <div className=" flex justify-between items-center p-4 shadow-lg ">
        <div className="flex items-center gap-3">
           <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center pulse-ring neon-glow">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
            <p className="font-bold text-2xl">Elevate</p>
        </div>
        <div className="hidden md:flex gap-4">
            <span  className="text-gray-600 underline-hover  hover:text-purple-600 transition-all duration-300 hover:scale-110 relative group "> Home</span>
            <span className="text-gray-600 underline-hover hover:text-purple-600 transition-all duration-300 hover:scale-110 relative group ">About</span>
            <span className="text-gray-600 underline-hover hover:text-purple-600 transition-all duration-300 hover:scale-110 relative group">Contact</span>
        </div>
        <div>
            <Button  text={"click me"} />
        </div>
    </div>
   
  );
}