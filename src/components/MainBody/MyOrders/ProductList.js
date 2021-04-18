import React from 'react';

const ProductList = (props) => {
    const {rate, title} = props.product;
    return (
        <div className="row border">
            <p className="col-6">{title}</p>
            <p className="col-6">{rate}</p>
        </div>
    );
};

export default ProductList;