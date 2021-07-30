import React, { useState } from 'react';

const useHideList = () => {
    const [hideList, setHideList] = useState<boolean>(true)

    const changeHide = () => {
        setHideList(!hideList)
    }

    return { hideList, changeHide }
};

export default useHideList;