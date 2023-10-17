import CarCard from "../components/CarCard";
import CarModal from '../components/CarModal'
import {useState} from 'react'

const CarList = (props) => {

  const [selectedCar, setSelectedCar] = useState()
  
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {props.carsList.map((car, index) => (
        <div key={index} onClick={()=>{document.getElementById("my_modal_4").showModal(); setSelectedCar(car)}}>
          <CarCard car={car}/>
        </div>
      ))}
     
      <dialog id="my_modal_4" className="modal">
        <CarModal car = {selectedCar}/>
      </dialog>
    </div>
  );
};

export default CarList;
