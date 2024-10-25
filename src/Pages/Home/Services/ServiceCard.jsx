import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";


const ServiceCard = ({service}) => {
    const {title,img,price,_id}=service;
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={img}
            alt="Shoes"
            className="rounded-xl w-[314px]" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div className="justify-between flex items-center">
          <div>
            <p className="text-xl text-[#FF3811]">Price :${price}</p></div>
          <div className="card-actions">
           <Link to={`/checkout/${_id}`}> <button className="btn text-[#FF3811]"><FaArrowRight /></button></Link>
          </div>
          </div>
        </div>
      </div>
    );
};

export default ServiceCard;