import React, { useEffect, useState } from 'react';

const Orders = () => {

    const [orders, setOrders] = useState()
    useEffect(() => {
        fetch('https://ancient-temple-97023.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    // console.log(orders);


    const handleCancel = (_id) => {
        fetch(`https://ancient-temple-97023.herokuapp.com/delete/${_id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount === 1) {
                    const remainingOrders = orders.filter(order => order._id !== _id)
                    setOrders(remainingOrders)
                }
                else {
                    alert('Something is wrong')
                }
            })
    }



    return (
        <div className="text-center">
            <h1>Orders</h1>
            <table className="table table-hover">

                <thead>
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Buyer</th>
                        <th scope="col">Email</th>
                        <th scope="col">Status</th>
                        <th scope="col">Cancel</th>

                    </tr>
                </thead>
                <tbody>
                    {orders?.map((order) => {
                        const { _id, img, title, price, name, email, status } = order;

                        return (
                            <tr key={_id}>
                                <td><img width="50px" src={img} alt="" /></td>
                                <td>{title?.slice(0, 10)}</td>
                                <td>{price}</td>
                                <td>{name}</td>
                                <td>{email}</td>
                                <td>{status}</td>
                                <td><button onClick={() => handleCancel(_id)} className="btn btn-warning">Cancel</button></td>

                            </tr>
                        )
                    })}
                </tbody>

            </table>
        </div>
    );
};

export default Orders;