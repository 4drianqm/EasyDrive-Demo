import CarCard from '../components/CarCard'

const CarList = (props) => {
  return (
    <div>
        {props.carsList.map((car)=>(
            <div>
                <CarCard car = {car}/>
            </div>
        ))}
    </div>
  )
}

export default CarList