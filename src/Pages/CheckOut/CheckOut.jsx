import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';


const CheckOut = () => {
    const{user}=useContext(AuthContext);
    const service = useLoaderData();
    const { title,price,_id,img} = service;
    const handleOrderSevice=e=>{
        e.preventDefault();
        const form=e.target;
        const name=form.name.value;
        const email=form.email.value;
        const date=form.date.value;
        const amount=form.amount.value;
        
        const order={
            customerName:name,
            email,
            date,
            amount,img,
            service:title,
            service_id:_id
        }
            
        fetch('http://localhost:5000/bookings',{
            method:'POST',
           headers:{
            'content-type':'application/json'
           },
           body:JSON.stringify(order)

        })
        .then(res=>res.json())
        .then(data=>{
            // console.log(data);
            if(data.insertedId){
                alert('added successcully')
            }
        })

    }

    return (
        <div >
             <h3 className='text-center text-3xl font-bold'>{title}</h3>


            <form onSubmit={handleOrderSevice}  className="card-body">
                <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-6'>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="Service Name" name='name'defaultValue={user?.displayName} className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Date</span>
                    </label>
                    <input type="date"name='date'  className="input input-bordered" required />
                 
                </div>
              
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="email" className="input input-bordered" defaultValue={user?.email} required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Due Amoutn</span>
                    </label>
                    <input type="text" name='amount' defaultValue={'$'+price} className="input input-bordered" />
                 
                </div>
                </div>
                <div className="form-control mt-6">
                    <input type="submit" className='btn btn-warning btn-block' value="Order Confirm" />
                </div>
            </form>


        </div>






    );
};

export default CheckOut;