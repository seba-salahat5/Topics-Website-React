import { useEffect, useState } from 'react';

function useContext(value) {
    const [themeValue, setThemeValue] = useState('light');

    useEffect(() => {
        setThemeValue(value);
    }, value);

    return themeValue;
}

export default useContext;