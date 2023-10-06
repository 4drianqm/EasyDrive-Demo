import Hero from '../components/Hero'
import SearchFilter from '../components/SearchFilter'
import CarFilter from '../components/CarFilter'
import CarList from '../components/CarList'

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


export default async function Home() {

  const {cars} = await getCars();
  return (
    <div className='p-5 sm:px-10 md:px-20'>
      <Hero/>
      <SearchFilter/>
      <CarFilter/>
      <CarList carsList = {cars}/>
    </div>
  )
}
