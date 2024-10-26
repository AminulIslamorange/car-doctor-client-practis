

const BookingsRow = ({ booking,handleDelete,handleConfirm }) => {
    const { customerName,_id, email, service, date, amount, img,status } = booking;
    


    
    return (
        <tr>
            <th>
                <button onClick={()=>handleDelete(_id)} className="btn btn-circle btn-outline btn-warning btn-sm">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            {img ? <img
                                src={img}
                                alt="Avatar Tailwind CSS Component" /> : <div className="avatar">

                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>}
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{customerName}</div>
                        <div className="text-sm opacity-50">{date}</div>
                    </div>
                </div>
            </td>

            <td>{email}</td>
            <td>{service}</td>
            <td>{amount}</td>
            <th>
               { status==='confirm'?<span className="text-yellow-700">APPROVED</span>:
                <button onClick={()=>handleConfirm(_id)} className="text-yellow-500">Confirm</button>
                }
            </th>
        </tr>
    );
};

export default BookingsRow;