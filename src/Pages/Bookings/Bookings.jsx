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
    },[url])
    const handleDelete=id=>{
        const proceed=confirm('Are you sure want to delete?')
        if(proceed){
            fetch(`http://localhost:5000/bookings/${id}`,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
               if(data.deletedCount > 0){
                alert('Deleted Successfully');
                const remaining=bookings.filter(booking=>booking._id !==id);
                setBooking(remaining)
               }
               
            })

        }
    }
    const handleConfirm=(id)=>{
      fetch(`http://localhost:5000/bookings/${id}`,{
        method:'PATCH',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify({status:'confirm'})
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data);
        if(data.modifiedCount> 0){
          alert('updated successfully')
          const remaining=bookings.filter(booking=>booking._id !==id);
          const updated=bookings.find(booking=>booking._id ===id);
          updated.status='confirm'
          const newBooking=[updated,...remaining];
          setBooking(newBooking)
        }
      })

    }
    return (
        <div className="my-12">
            <h5 className="text-3xl text-center">Your Bookings:{bookings.length}</h5>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          Delete
        </th>
        <th>Name</th>
        <th>Email</th>
        <th>Service Name</th>
        <th>Amount</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
    {bookings.map(booking=><BookingsRow key={booking._id} booking={booking} handleDelete={handleDelete} handleConfirm={handleConfirm}></BookingsRow>)}
     
     
      
    </tbody>
    
  </table>
</div>
        </div>
    );
};

export default Bookings;