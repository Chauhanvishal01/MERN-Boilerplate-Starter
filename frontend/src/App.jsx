import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<HomePage />} />
      </Routes>
      <ToastContainer theme="dark" position="bottom-right" />
    </>
  );
}

export default App;
