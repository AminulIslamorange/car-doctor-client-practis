import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingsRow from "./BookingsRow";


const Bookings = () => {
    const {user}=useContext(AuthContext);
    const [bookings,setBooking]=useState([]);
    const url=`http://localhost:5000/bookings?email=${user.email}`
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setBooking(data);
        })
    },[])
    return (
        <div>
            <h5>Your Bookings:{bookings.length}</h5>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Email</th>
        <th>Service Name</th>
        <th>Amount</th>
      </tr>
    </thead>
    <tbody>
    {bookings.map(booking=><BookingsRow key={booking._id} booking={booking}></BookingsRow>)}
     
     
      
    </tbody>
    
  </table>
</div>
        </div>
    );
};

export default Bookings;