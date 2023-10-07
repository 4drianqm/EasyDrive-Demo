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
  
export default getCars;