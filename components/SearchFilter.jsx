import { FaLocationDot } from "react-icons/fa6";

const SearchFilter = () => {
  return (
    <div className="items-center">
        <h1 className="text-[40px] text-center">CARS CATALOGE</h1>
      <h2 className="text-center font-bold text-lg">Let's Search What You Need!</h2>
      <div className="flex justify-center">
        <div className="bg-gray-100 flex rounded-full p-3">
          <div className="flex items-center gap-2">
            <FaLocationDot />
            <input
              type="text"
              name=""
              id=""
              placeholder="location"
              className="outline-none bg-transparent"
            />
          </div>
          <div>
            <input type="date" name="" id="" className="bg-transparent outline-none" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
