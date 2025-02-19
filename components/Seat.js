import React from "react";

const Seat = ({ seatId, category, price, isSelected, onSelect }) => {
  const categoryColors = {
    Silver: "bg-gray-400",
    Gold: "bg-yellow-500",
    Platinum: "bg-blue-500",
  };

  return (
    <button
      className={`w-12 h-12 m-1 rounded-lg text-white text-sm 
        ${isSelected ? "bg-green-500" : categoryColors[category]}`}
      onClick={() => onSelect(seatId)}
    >
      {seatId}
    </button>
  );
};

export default Seat