import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { getDataKey } from '../MyOrders/databasem';

const ServiceList = ({ data }) => {
    const history = useHistory()
    const addItem = data => {
        localStorage.setItem(getDataKey(), JSON.stringify(data));
        history.push('/myOrdersForm')
    }
    return (
        <div className="col-md-4 mb-3">
            <div className="bg-light text-center">
                <img className="img-fluid" src={data.img} alt="" />
                <h6 className="m-2">{data.title}</h6>
                <small className="text-secondary">{data.description}</small> <br />
                <div className="row bg-info m-2">
                        <p className="col">Square Feet: ${data.rate}</p>
                        <button className="col btn-success" onClick={() => addItem(data)}>Order</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceList;