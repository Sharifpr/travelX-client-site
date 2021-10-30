import { useState, useEffect } from "react";

const usePackages = () => {
    const [packages, setPackages] = useState([]);
    const [totalPage, setTotalPage] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);

    const size = 6;

    useEffect(() => {
        fetch(`https://ancient-temple-97023.herokuapp.com/packages?size=${size}&&page=${currentPage}`)
            .then((res) => res.json())
            .then((data) => {
                setPackages(data.packages)
                const totalData = data.count;
                const pages = Math.ceil(totalData / size);
                setTotalPage(pages);
            });
    }, [currentPage]);
    return { packages, setPackages, totalPage, currentPage, setCurrentPage };
};

export default usePackages;