import React from "react";
import { toast } from "react-toastify";

const BookingSummary = ({ selectedSeats, seatPrices, seatCategories }) => {
  const totalPrice = selectedSeats.reduce(
    (sum, seat) => sum + seatPrices[seatCategories[seat[0]]],
    0
  );

  return (
    <div className="mt-4 p-4 bg-gray-200 rounded-lg text-center text-black">
      <h2 className="text-lg font-semibold">Booking Summary</h2>
      <p>Selected Seats: {selectedSeats.join(", ") || "None"}</p>
      <p>Total Price: ₹{totalPrice}</p>
      <button
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => toast.success("Booking Confirmed")}
        disabled={selectedSeats.length === 0}
      >
        Book Now
      </button>
    </div>
  );
};

export default BookingSummary;
