import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {
    const [services,setServices]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div>
            <div className="text-center space-y-3 ">
                <h3 className="text-3xl text-[#FF3811] font-bold">Service</h3>
                <h2 className="text-2xl">Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which dont look even slightly believable. </p>


               <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
                {services.map(service=><ServiceCard key={service._id} service={service}></ServiceCard>)}
               </div>
            </div>
        </div>
    );
};

export default Services;