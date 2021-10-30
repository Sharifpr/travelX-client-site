import React, { createContext } from "react";
import useCart from "../hooks/useCart.js";
import useFirebase from "../hooks/useFirebase.js";
import usePackages from "../hooks/usePackages.js";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const AllContexts = useFirebase();
    const { packages, totalPage, currentPage, setCurrentPage } = usePackages();
    const { addToCart, selectedPackage, removeItem, setSelectedPackage } = useCart();


    const data = {
        AllContexts,
        currentPage,
        setCurrentPage,
        totalPage,
        packages,
        addToCart,
        selectedPackage,
        removeItem,
        setSelectedPackage,
    };

    return (
        <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;