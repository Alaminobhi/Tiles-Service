import React from 'react';
import ProductList from './ProductList';

const MyOrdersList = (props) => {
    const { products, order } = props.list;
    const { name, address, feet } = order;
    const { title, rate, category, description, img } = products;
    const taka = Number(feet * rate);
    return (
        <div className="col-md-6">
            <div className="m-2 bg-secondary text-center border-radius">
                <h6 className="text-success">{title}</h6>
                <div className="row">
                    <div className="col-md-6">
                        <img style={{ width: "200px" }} src={img} alt="" />
                    </div>
                    <div className="col-md-6">
                        <span>{name}</span>
                        <span> {address}</span> <br />
                        <small>Feet: {feet}</small>
                        <small>*{rate} </small>
                        <small><b>={taka}TK</b></small><br />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyOrdersList;