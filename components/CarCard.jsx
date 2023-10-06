"use client"
import {useState} from 'react'

const CarCard = (props) => {
    const [car, setCar] = useState(props.car)
  return (
    <div>
        <h2 className='text-[20px] font-medium mb-2'>{car.Make}</h2>
        <h2 className='text-[20px] font-bold mb-2'>
            <span className='text-[12px] font-light'>$</span>
            {car.Price}
            <span className='text-[12px] font-light'>/day</span>
        </h2>
    </div>
  )
}

export default CarCard