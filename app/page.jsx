"use client";
import Hero from "../components/Hero";
import SearchFilter from "../components/SearchFilter";
import CarFilter from "../components/CarFilter";
import CarList from "../components/CarList";
import { useState, useEffect } from "react";
import getCars from "../services/index";

{
  /*
const getCars = async () =>{
  try {
    const res = await fetch('http://localhost:3000/api/cars', {
      cache: "no-store",
    });

    if(!res.ok){
      throw new Error('Failed to fetch cars');
    }

    return res.json();
  } catch (error) {
    console.log("error loading cars", error);
  }
}

const {cars} = await getCars();
*/
}


export default function Home() {

  const [carsList, setCarsList] = useState([])
  const [carfilter, setCarfilter] = useState([])

  useEffect(() => {
    getCarList_();
  }, []);

  const getCarList_ = async () => {
    const result = await getCars();
    setCarsList(result.cars)
    setCarfilter(result.cars)
  };

  const filterPriceCar=(order)=>{
    const sortedData = [...carfilter].sort((a,b)=>
    order == -1? a.Price - b.Price:b.Price - a.Price);
    setCarsList(sortedData)
  }

  const filterCarList=(value)=>{
    const filterList = carfilter.filter((item)=>
      item.Make ==  value);
    setCarsList(filterList);
  }

  return (
    <div className="p-5 sm:px-10 md:px-20">
      <Hero />
      <SearchFilter/>
      <CarFilter carsList={carfilter}
      setPrice={(value)=>filterPriceCar(value)}
      setMake={(value)=>filterCarList(value)}/>
      <CarList carsList={carsList} />
    </div>
  );
}
