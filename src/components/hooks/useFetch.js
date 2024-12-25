import { useState, useEffect } from "react"

export const useFetch = (initData,url) => {
    const [data, setData] = useState({});
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }); // Include `postId` as a dependency


    return {
        data,
        loading,
        error,
    }

}