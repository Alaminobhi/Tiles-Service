import React from 'react';
import AddService from './AddService';
import AdminSitevar from './AdminSitevar';

const Admin = () => {
    return (
       <div className="row mt-5">
          <div className="col-md-3 mt-5">
          <AdminSitevar></AdminSitevar>
       </div>
       <div className="col-md-9">
       <AddService></AddService>
       </div>
       </div>
    );
};

export default Admin;