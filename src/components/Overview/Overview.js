import React, { useEffect, useState } from 'react';

const Overview = () => {
    const [orders, setOrders] = useState()
    useEffect(() => {
        fetch('https://ancient-temple-97023.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <div className="text-center">
            <h1 >Overview</h1>
            <h4>Total Order For Review :{orders?.length}</h4>
        </div>
    );
};

export default Overview;