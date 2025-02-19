// import { useState, useMemo } from "react";
// import SeatGrid from "../components/SeatGrid";
// import BookingSummary from "../components/BookingSummary";

// const rows = 6;
// const cols = 10;
// const pricing = { silver: 100, gold: 150, platinum: 200 };

// const getSeatType = (row) => {
//   if (row < 2) return "silver";
//   if (row < 4) return "gold";
//   return "platinum";
// };

// export default function Home() {
//   const [selectedSeats, setSelectedSeats] = useState([]);

//   const toggleSeat = (seat) => {
//     setSelectedSeats((prev) => {
//       if (prev.includes(seat)) {
//         return prev.filter((s) => s !== seat);
//       }
//       if (prev.length >= 8) {
//         alert("You can only select up to 8 seats");
//         return prev;
//       }
//       return [...prev, seat];
//     });
//   };

//   const totalCost = useMemo(() => {
//     return selectedSeats.reduce(
//       (acc, seat) => acc + pricing[getSeatType(seat.charCodeAt(0) - 65)],
//       0
//     );
//   }, [selectedSeats]);

//   const bookSeats = () => {
//     alert("Booking Confirmed!");
//   };

//   return (
//     <div className="flex flex-col items-center p-5">
//       <h1 className="text-2xl font-bold mb-4">
//         Interactive Seat Booking System
//       </h1>
//       <SeatGrid
//         rows={rows}
//         cols={cols}
//         selectedSeats={selectedSeats}
//         toggleSeat={toggleSeat}
//       />
//       <BookingSummary
//         selectedSeats={selectedSeats}
//         totalCost={totalCost}
//         bookSeats={bookSeats}
//       />
//     </div>
//   );
// }

import SeatGrid from "../components/SeatGrid";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Interactive Seat Booking</h1>
      <SeatGrid />
    </div>
  );
}
