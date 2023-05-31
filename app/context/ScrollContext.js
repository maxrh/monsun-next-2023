"use client"

import { createContext } from 'react';

const ScrollContext = createContext({
    sectionInView: "",
    setSectionInView: () => {},
});

export default ScrollContext;