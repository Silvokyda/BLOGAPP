"use client";

import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../context/themeContext'

const ThemeProvider = ({children}) => {
    const { theme } = useContext(ThemeContext);
    const [mounted, setMounted] = useState(false)

    useEffect(() =>{

        setMounted(true);
        
    }, []);

    return (
        <div className={theme}>{children}</div>
    )
}

export default ThemeProvider