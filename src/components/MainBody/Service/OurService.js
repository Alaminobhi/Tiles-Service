import React, { useEffect, useState } from 'react';
import ServiceList from './ServiceList';

const OurService = () => {
    const [serviceData, setServiceData] = useState([]);

    useEffect(() => {
        fetch('https://thawing-shelf-52528.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServiceData(data))
    }, [])

    return (
        <section className="mt-5">
            <div className="text-center">
            <h6 style={{color: '#1CC7C1'}}>OUR SERVICES</h6>
            <h3>Services We Provided</h3>
            </div>
            <div className="row m-2">
                {
                    serviceData.map(data => <ServiceList key={data._id} data ={data}></ServiceList>)
                }
            </div>
        </section>
    );
};

export default OurService;