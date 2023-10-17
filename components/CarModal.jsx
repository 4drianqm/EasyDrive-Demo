import React from "react";
import CarCard from "./CarCard";
import CarForm from './CarForm'

const CarModal = ({car}) => {
  return (
    <div className="modal-box w-11/12 max-w-5xl">
      <div className="border-b-[1px] pb-2">
        <h3 className="text-[30px] font-light text-gray-400">Rent Now!</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
            <CarCard car= {car}/>
        </div>
        <div>
            <CarForm/>
        </div>
      </div>
    </div>
  );
};

export default CarModal;
