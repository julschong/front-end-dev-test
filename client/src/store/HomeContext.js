import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { BACKEND_URL } from './../config/config';

export const HomeContext = createContext(null);

const HomeContextProvider = ({ children }) => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`${BACKEND_URL}/home`).then((res) => {
            setData({ ...res.data });
            setLoading(false);
        });
    }, []);

    const store = {
        homeData: { data, setData, loading }
    };

    return (
        <HomeContext.Provider value={store}>{children}</HomeContext.Provider>
    );
};

export default HomeContextProvider;
