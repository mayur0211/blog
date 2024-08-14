import React, { createContext, useState } from 'react';

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
    const [searchText, setSearchText] = useState('');
    const [submitSearch, setSubmitSearch] = useState(5)



    return (
        <SearchContext.Provider value={{ searchText, setSearchText, submitSearch, setSubmitSearch }}>
            {children}
        </SearchContext.Provider>
    );
};
