import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Headers/Header';
import Blogs from './Blogs/Blogs';
import MyOrders from './MyOrders/MyOrders';
import AddReview from './Review/AddReview';
import Review from './Review/Review';
import OurService from './Service/OurService';

const Home = () => {
    return (
        <div>
           <Header></Header>
            <OurService></OurService>
            <MyOrders></MyOrders>
            <Review></Review>
            <AddReview></AddReview>
            <Blogs></Blogs>
            <Footer></Footer>
        </div>
    );
};

export default Home;