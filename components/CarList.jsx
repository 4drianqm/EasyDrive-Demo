import CarCard from '../components/CarCard'

const CarList = (props) => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {props.carsList.map((car)=>(
            <div>
                <CarCard car = {car}/>
            </div>
        ))}
    </div>
  )
}

export default CarList