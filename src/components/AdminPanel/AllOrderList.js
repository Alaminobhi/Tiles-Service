import React from 'react';

const AllOrderList = ({orders}) => {
    const {order, products, date} = orders;
    const {name, email, phone, address, photo, feet} = order;
    const {title, rate, category} = products;
    const total = Number(feet*rate);
    return (
        <div className="col-md-6">
            <div className="text-left bg-light m-2">
                <h5>{title}</h5>
                <p>{category}</p>
                <p>Feet: {feet}</p><p> Rate: {rate}</p> <p>Total Price: {total} TK</p>
                <h6><img style={{width: "50px"}} src={photo} alt=""/> {name}</h6>
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
                <p>Address: {address}, Bangladesh</p>
                <p>Date: {date}</p>


            </div>
        </div>
    );
};

export default AllOrderList;