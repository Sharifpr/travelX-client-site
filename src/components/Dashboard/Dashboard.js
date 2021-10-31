import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import Profile from '../Profile/Profile';

const Dashboard = () => {
    const [current, setCurrent] = useState('Profile')

    const handleProfile = (e) => {
        setCurrent(e.target.value);
    }
    const handleCart = (e) => {
        setCurrent(e.target.value);
    }

    // console.log(current);

    return (
        <div>
            <div className="d-flex justify-content-center my-5">
                <input className="btn btn-primary" onClick={handleProfile} type="button" value="Profile" />
                <input className="btn btn-primary" style={{ marginLeft: "5px" }} onClick={handleCart} type="button" value="Cart" />
            </div>
            <div className="">
                {
                    (current === "Profile" && <Profile></Profile>) || (current === "Cart" && <Cart></Cart>)
                }
            </div>
        </div>
    );
};

export default Dashboard;