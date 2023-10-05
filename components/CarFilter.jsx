import React from "react";

const CarFilter = () => {
  return (
    <div className="flex mt-5 items-center justify-center">
      <div className="flex gap-4">
        <select
          className="select select-bordered w-full max-w-xs font-bold"
          defaultValue="Min to Max"
        >
          <option disabled>Price</option>
          <option>Min to Max</option>
          <option>Max to Min</option>
        </select>
        <select
          className="select select-bordered w-full max-w-xs font-bold"
          defaultValue="MBW"
        >
          <option disabled>Make</option>
          <option>MBW</option>
          <option>Toyota</option>
        </select>
      </div>
    </div>
  );
};

export default CarFilter;
