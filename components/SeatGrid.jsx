import React, { useState } from "react";
import Seat from "./Seat";
import BookingSummary from "./BookingSummary";

const rows = ["A", "B", "C", "D", "E", "F"];
const cols = 10;
const seatCategories = {
  A: "Silver",
  B: "Silver",
  C: "Gold",
  D: "Gold",
  E: "Platinum",
  F: "Platinum",
};
const seatPrices = { Silver: 100, Gold: 150, Platinum: 200 };

const SeatGrid = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSelect = (seatId) => {
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatId));
    } else {
      if (selectedSeats.length < 8) {
        setSelectedSeats([...selectedSeats, seatId]);
      } else {
        alert("You can only select up to 8 seats");
      }
    }
  };

  return (
    <div className="flex flex-col items-center p-4">
      {/* Theater Screen */}
      <p className="text-black mt-10">Facing this side</p>
      <div className="w-full flex justify-center rounded-t-full">
        <div className="w-full bg-gray-300 text-white text-center py-3 rounded-t-lg shadow-lg"></div>
      </div>
      <div className="h-10 w-full bg-gradient-to-b from-sky-200 to-sky-100"></div>

      {/* Seat Layout */}
      <div className="mt-4 grid grid-cols-10 gap-2 p-4 bg-white rounded-lg shadow-lg">
        {rows.map((row) => {
          const category = seatCategories[row];
          const seats = [];
          for (let i = 1; i <= cols; i++) {
            const seatId = `${row}${i}`;
            seats.push(
              <Seat
                key={seatId}
                seatId={seatId}
                category={category}
                price={seatPrices[category]}
                isSelected={selectedSeats.includes(seatId)}
                onSelect={handleSelect}
              />
            );
          }
          return seats;
        })}
      </div>

      {/* Booking Summary */}
      <BookingSummary
        selectedSeats={selectedSeats}
        seatPrices={seatPrices}
        seatCategories={seatCategories}
      />
    </div>
  );
};

export default SeatGrid;
