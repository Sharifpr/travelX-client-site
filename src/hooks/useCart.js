import { useEffect, useState } from "react";
// import useAuth from "./useAuth.js";
import useFirebase from "./useFirebase.js";

const useCart = () => {
    const { user } = useFirebase();
    const { uid, displayName, email } = user;
    const [selectedPackage, setSelectedPackage] = useState([]);

    useEffect(() => {

        fetch(`https://ancient-temple-97023.herokuapp.com/cart/${uid}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.length) {
                    setSelectedPackage(data);
                }
            });

    }, [uid]);

    function addToCart(tour) {
        const isHave = selectedPackage.find(
            (selected) => selected._id === tour._id
        );
        delete tour._id;
        tour.uid = uid;
        tour.name = displayName;
        tour.email = email;
        tour.status = "pending";

        if (isHave) {
            alert("package has been selected!");
        } else {
            fetch("https://ancient-temple-97023.herokuapp.com/package/add", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(tour)
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.insertedId) {
                        const newSelection = [...selectedPackage, tour];
                        setSelectedPackage(newSelection);
                    }
                });
        }
    }

    function remove(id) {
        fetch(`https://ancient-temple-97023.herokuapp.com/delete/${id}`, {
            method: "delete",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount === 1) {
                    const selectAfterRemove = selectedPackage.filter(
                        (tour) => tour._id === id
                    );
                    setSelectedPackage(selectAfterRemove);
                } else {
                    alert("something went wrong!!");
                }
            });
    }

    return { setSelectedPackage, remove, addToCart, selectedPackage };
};

export default useCart;