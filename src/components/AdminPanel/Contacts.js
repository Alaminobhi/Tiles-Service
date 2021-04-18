import React, { useEffect, useState } from 'react';
import AdminSitevar from './AdminSitevar';
import ContactList from './ContactList';

const Contacts = () => {
    const [contactList, setContactList] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/contactList')
            .then(res => res.json())
            .then(data => setContactList(data))
    }, [])
    return (
        <div className="row mt-5">
            <div className="col-md-3 mt-5">
                <AdminSitevar></AdminSitevar>
            </div>
            <div className="col-md-9">
                <div className="mt-5">
                    <h3 className="text-center">Contact List</h3>
                    <hr/>
                    <div className="row justify-content-center">
                        {
                            contactList.map(contact => <ContactList key={contact._id} contact={contact}>

                            </ContactList>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;