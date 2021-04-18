import React from 'react';
import { Link } from 'react-router-dom';

const AdminSitevar = () => {
    return (
        <div>
            <div className="border border-warning text-center ms-2">
                <Link className="border" to="/admin">Add Service</Link>
                <br/>
                <Link className="border" to="/contacts">Contact List</Link>
                <br/>
                <Link className="border" to="/allOrders">All Orders List</Link>
            </div>
        </div>
    );
};

export default AdminSitevar;