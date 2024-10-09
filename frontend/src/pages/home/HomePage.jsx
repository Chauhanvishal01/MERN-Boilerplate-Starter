import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Navbar from "../../components/Navbar";
const HomePage = () => {
  const [message, setMessage] = useState("");
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/v1/user/getUser`
        );
        setMessage(response.data);
        toast.success(response.data);
      } catch (error) {
        console.error("Error fetching the message:", error);
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="container mx-auto mt-10 p-6">
      <Navbar />
      <h1 className="text-4xl font-bold text-center text-blue-600 mt-8">
        Message from Backend:
      </h1>
      <p className="text-2xl font-semibold text-center text-gray-700 mt-4">{message}</p>
    </div>
  );
};

export default HomePage;
