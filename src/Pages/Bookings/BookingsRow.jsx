

const BookingsRow = ({booking}) => {
    const {customerName,email,service,date,amount,img}=booking;
    return (
        <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
               {img ? <img
                  src={img}
                  alt="Avatar Tailwind CSS Component" /> :<div className="avatar">
                  
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
          <button className="btn btn-ghost btn-xs">Details</button>
        </th>
      </tr>
    );
};

export default BookingsRow;