import Image from 'next/image'

const Hero = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2'>
        <div className='text-[40px] font-bold md:text-[60px]'>
            <h1 className='text-[40px] font-bold md:text-[100px]'>Rent The Ideal Car For You</h1>
            <h2 className='text-[20px] text-gray-500 pr-20 mt-5'>Book the selected car effortlessly, Pay for driving only,
                Book the Car Now
            </h2>
            <button className='btn btn-primary text-white'>Explore Cars</button>
        </div>
        <div>
            <Image src={'/hero.png'}
              alt='Caro'
              width={400}
              height={500}
              className='w-full object-cover align-middle rounded-lg'
            />
        </div>
    </div>
  )
}

export default Hero