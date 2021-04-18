import React from 'react';

const ContactList = ({contact}) => {
    const {name, email, sms, phone} = contact;
    return (
        <div className="col-md-6">
            <div className="text-center bg-light m-2">
            <h6>Name: {name}</h6>
            <p>Number <a href={phone}>Call Now</a></p>
            <p>Email: {email}</p>
            <p>{sms}</p>

            </div> 
        </div>
    );
};

export default ContactList;