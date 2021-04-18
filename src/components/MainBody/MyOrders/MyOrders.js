import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import MyOrdersList from './MyOrdersList';

const MyOrders = () => {
    const [orderList, setOrderList] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/orderList')
        .then(res => res.json())
        .then(data => setOrderList(data))
    }, [])
    return (
        <div>
        <h3 className="text-secondary text-center">Your Order List</h3>
            <hr/>
            <div className="bg-light row  mb-2 justify-content-center">
            {
                orderList.map(list => <MyOrdersList key={list._id} list={list}>
                </MyOrdersList>)
            }
            </div>
        </div>
    );
};

export default MyOrders;