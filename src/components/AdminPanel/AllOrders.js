import React, { useEffect, useState } from 'react';
import AdminSitevar from './AdminSitevar';
import AllOrderList from './AllOrderList';

const AllOrders = () => {
    const [orderList, setOrderList] = useState([]);
    useEffect(() => {
        fetch('https://thawing-shelf-52528.herokuapp.com/orderList')
            .then(res => res.json())
            .then(data => setOrderList(data))
    }, [])
    return (
        <div className="row mt-5">
            <div className="col-md-3 mt-5">
                <AdminSitevar></AdminSitevar>
            </div>
            <div className="col-md-9">
                <div className="mt-5">
                    <h3 className="text-center">All Order List</h3>
                    <div className="row justify-content-center">
                        {
                            orderList.map(orders => <AllOrderList key={orders._id} orders={orders}>

                            </AllOrderList>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllOrders;