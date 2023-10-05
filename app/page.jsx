import Hero from '../components/Hero'
import SearchFilter from '../components/SearchFilter'
import CarFilter from '../components/CarFilter'

export default function Home() {
  return (
    <div className='p-5 sm:px-10 md:px-20'>
      <Hero/>
      <SearchFilter/>
      <CarFilter/>
    </div>
  )
}
