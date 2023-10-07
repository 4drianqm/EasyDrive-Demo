import CarCard from '../components/CarCard'

const CarList = (props) => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {props.carsList.map((car, index)=>(
            <div key={index}>
                <CarCard car = {car}/>
            </div>
        ))}
    </div>
  )
}

export default CarList