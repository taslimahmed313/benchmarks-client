import React, { useContext } from "react";
import swal from "sweetalert";
import { AuthContext } from "../../../Contexts/AuthProvider";

const BookingModal = ({ bookingData, setBookingData }) => {
  const { resalePrice, name, img } = bookingData;
  const { user } = useContext(AuthContext);

  
  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const userName = form.name.value;
    const email = form.email.value;
    const bookName = form.bookName.value;
    const price = form.price.value;
    const phone = form.phone.value;
    const location = form.location.value;
    
    const bookingItem = {
      customerName: userName,
      location, 
      price,
      phone,
      email,
      bookName,
      img
    };
    
  
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingItem),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          setBookingData(null);
          swal("Confirmed Booked!", `${name} Booking  Successfully!`, "success");
        }
      });
  };

  return (
    <div className="">
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal ">
        <div className="modal-box relative rounded-lg shadow-2xl bg-gradient-to-r from-sky-300 to-indigo-300">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{}</h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 mt-10"
          >
            <input
              name="name"
              type="text"
              defaultValue={user?.displayName}
              disabled
              className="input w-full input-sm input-bordered"
            />
            <input
              name="email"
              type="email"
              defaultValue={user?.email}
              disabled
              placeholder="Email Address"
              className="input w-full input-sm input-bordered"
            />
            <input
              type="text"
              disabled
              value={name}
              name="bookName"
              className="input w-full input-sm input-bordered "
            />
            <input
              name="price"
              type="text"
              defaultValue={`USD $${resalePrice}`}
              disabled
              placeholder="Email Address"
              className="input w-full input-sm input-bordered"
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="input w-full input-sm input-bordered"
              required
            />
            <input
              name="location"
              type="text"
              placeholder="Where would you like to meet??"
              className="input w-full input-sm input-bordered"
              required
            />
            <br />
            <input
              className="btn w-full capitalize font-serif text-lg rounded-full text-white font-semibold border-none mb-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
