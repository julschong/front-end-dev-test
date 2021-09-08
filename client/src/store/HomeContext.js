import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { BACKEND_URL } from './../config/config';

export const HomeContext = createContext(null);

const HomeContextProvider = ({ children }) => {
    const [data, setData] = useState({ loading: true, data: {} });

    useEffect(() => {
        axios
            .get(`${BACKEND_URL}/home`)
            .then((res) => setData({ loading: false, data: res.data }));
    }, []);

    const store = {
        homeData: [data, setData]
    };

    return (
        <HomeContext.Provider value={store}>{children}</HomeContext.Provider>
    );
};

export default HomeContextProvider;
