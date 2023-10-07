import React,{useEffect, useState} from 'react'


const CarFilter = ({carsList, setMake, setPrice}) => {

   
  const [makelist, setMakeList] = useState();
  const carMakeSet = new Set();

  useEffect(()=>{
    if(carsList){
      filterCarList();
    }
  },[carsList])

  const filterCarList=()=>{
    carsList.forEach(element => {
        carMakeSet.add(element.Make);
    });
    setMakeList(Array.from(carMakeSet))  
  }
  
 
  return (
    <div className="flex mt-5 items-center justify-center">
      <div className="flex gap-4">
        <select
          className="select select-bordered w-full max-w-xs font-bold"
          defaultValue="Min to Max"
          onChange={(e)=>setPrice(e.target.value)}>
          <option disabled>Price</option>
          <option value={-1}>Min to Max</option>
          <option value={1}>Max to Min</option>
        </select>
        <select
          className="select select-bordered w-full max-w-xs font-bold"
          defaultValue="Make"
          onChange={(e)=>setMake(e.target.value)}>
          <option disabled>Make</option>
              {makelist&&makelist.map((make, index)=>(
                <option key={index}>{make}</option>
              ))}
        </select>
      </div>
    </div>
  );
};

export default CarFilter;
