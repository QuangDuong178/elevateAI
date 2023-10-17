import {useState} from 'react';

export const useModalAINewsOrganism = () => {
    const [searchValue, setSearchValue] = useState<string>("")

    const handleClickSearch = () => {
    };
    return {

        searchValue,
        setSearchValue,
        handleClickSearch
    };
};
