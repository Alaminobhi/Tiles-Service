import React, { useEffect, useState } from 'react';
import BlogList from './BlogList';

const Blogs = () => {

    const [blogData, setBlogData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/blogs')
        .then(res => res.json())
        .then(data => setBlogData(data))
    }, [])

    return (
        <section className="mt-5 bg-light">
            <div className="text-center">
            <h1 style={{color: '#1CC7C1'}}>Services Blogs </h1><hr/>
            </div>
            <div className="row m-2">
                {
                    blogData.map(data => <BlogList key={data._id} data ={data}></BlogList>)
                }
            </div>
        </section>
    );
};

export default Blogs;