import { Target } from "lucide-react";

export const BoxCard = ({ title, description, imageUrl }) => {
  return (
    <div className="bg-white h-full w-2/3 md:w-1/3 flex flex-col justify-center items-center p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover rounded-t-lg mb-4" />
<div className="flex gap-2 items-center ">
    <Target size={30} className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl text-white"/>
      <h2 className="text-xl font-semibold ">{title}</h2>
</div>
      <p className="text-gray-600 font-light p-2">{description}</p>
    </div>
  );
}