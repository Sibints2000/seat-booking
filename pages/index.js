import SeatGrid from "../components/SeatGrid";
import { ToastContainer, toast } from "react-toastify";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4 text-black">
        Interactive Seat Booking
      </h1>
      <SeatGrid />
      <ToastContainer />
    </div>
  );
}
