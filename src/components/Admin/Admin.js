import React, { useState } from 'react';
// import { Col, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import useAuth from '../../hooks/useAuth';
import AddPackage from '../AddPackage/AddPackage';
// import AllPackages from '../AllPackages/AllPackages';
import Orders from '../Orders/Orders';
import Overview from '../Overview/Overview';

const Admin = () => {
    const history = useHistory()
    const { AllContexts } = useAuth()
    const { user } = AllContexts;
    const { uid } = user;

    const [active, setActive] = useState('Overview')
    // console.log(active);
    return (

        <div className="container">
            {
                uid !== "nDASLhC86sgRx0abQ3uJDj1I4t53" ? (history.push("/home")) : (
                    <div className="container-fluid">
                        <div className="row my-5">
                            <div className="col-4 mt-4" style={{ border: "1px solid gray" }}>
                                <ul className="list-unstyled">
                                    <li className="w-100 mb-2 mt-3"><input onClick={() => setActive("Overview")} className="w-100 d-block" type="button" value="Overview" /></li>
                                    <li className="w-100 mb-2"><input onClick={() => setActive("Orders")} className="w-100 d-block" type="button" value="Orders" /></li>

                                    <li className="w-100 mb-2"><input onClick={() => setActive("Add Package")} className="w-100 d-block" type="button" value="Add Package" /></li>
                                </ul>
                            </div>
                            <div className="col-8">
                                {
                                    (active === "Overview" && <Overview></Overview>) ||
                                    (active === "Orders" && <Orders></Orders>) ||
                                    (active === "Add Package" && <AddPackage></AddPackage>)
                                }
                            </div>
                        </div>
                    </div>
                )
            }

        </div >
    );
};

export default Admin;