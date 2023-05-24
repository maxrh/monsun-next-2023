import { useState, useEffect } from 'react';

const useRandomInRange = (min, max, trigger) => {
    const [value, setValue] = useState(null);

    useEffect(() => {
        const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
        setValue(randomValue);
    }, [min, max, trigger]);

    return value;
};

export default useRandomInRange;
