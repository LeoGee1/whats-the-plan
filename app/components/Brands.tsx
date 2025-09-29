import { FaSpotify, FaGoogle, FaStripe, FaYoutube, FaMicrosoft } from "react-icons/fa";

export default function Brands() {
  return (
    <div className="flex flex-wrap justify-center gap-6 opacity-80 text-4xl">
      <FaSpotify className="text-green-500" />
      <FaGoogle className="text-red-500" />
      <FaStripe className="text-indigo-500" />
      <FaYoutube className="text-red-600" />
      <FaMicrosoft className="text-blue-500" />
    </div>
  );
}
