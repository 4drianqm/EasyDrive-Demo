import { React, useState } from "react";

const CarForm = () => {
  const today = new Date();
  const [formValue, setFormValue] = useState({
    location: "",
    pickUpDate: "",
    dropOffDate: "",
    pickUpTime: "",
    dropOffTime: "",
    contactNumber: "",
  });

  const handleChange = (event) => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = () => {
    console.log(formValue);
  };
  return (
    <div>
      <div className="flex flex-col w-full mb-5">
        <label className="text-gray-400">PickUp Location</label>
        <select
          className="select 
        select-bordered w-full max-w-lg"
          name="location"
          onChange={handleChange}
        >
          <option disabled selected>
            PickUp Location?
          </option>
          <option>Quetzaltenango</option>
        </select>
      </div>

      <div className="flex flec-col gap-5 mb-5">
        <div className="flex flex-col w-full">
          <label className="text-gray-400">Pick Up Date</label>
          <input
            type="date"
            min={today}
            placeholder="Type here"
            name="pickUpDate"
            onChange={handleChange}
            className="input input-bordered w-full max-w-lg"
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="text-gray-400">Drop Off Date</label>
          <input
            type="date"
            placeholder="Type here"
            name="dropOffDate"
            onChange={handleChange}
            className="input input-bordered w-full max-w-lg"
          />
        </div>
      </div>

      <div className="flex gap-5 ">
        <div className="flex flex-col w-full mb-5">
          <label className="text-gray-400">Pick Up Time</label>
          <input
            type="time"
            name="pickUpTime"
            onChange={handleChange}
            placeholder="Type here"
            className="input input-bordered w-full max-w-lg"
          />
        </div>
        <div className="flex flex-col w-full mb-5">
          <label className="text-gray-400">Drop Off Time</label>
          <input
            type="time"
            name="dropOffTime"
            onChange={handleChange}
            placeholder="Type here"
            className="input input-bordered w-full max-w-lg"
          />
        </div>
      </div>
      <div className="flex flex-col w-full mb-5">
        <label className="text-gray-400">Contact Number</label>
        <input
          type="text"
          placeholder="Type here"
          name="contactNumber"
          onChange={handleChange}
          className="input input-bordered w-full max-w-lg"
        />
      </div>
      <div className="modal-action">
        <button className="btn">Close</button>
        <button
          className="btn bg-blue-500 text-white hover:bg-blue-800"
          onClick={() => {
            handleSubmit();
            setTimeout(() => {
              fetch("/api/send", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body:JSON.stringify(formValue)
              })
                .then((res) => res.json())
                .then((data) => console.log(data));
            }, 1);
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default CarForm;
