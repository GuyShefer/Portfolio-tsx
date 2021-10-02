import { useEffect, useState } from 'react';

export const useDarkMode = () => {
    const [theme, setTheme] = useState('light');
    const [componentMounted, setComponentMounted] = useState(false);

    const setMode = (mode: string) => {
        window.localStorage.setItem('theme', mode)
        setTheme(mode)
    };

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    };

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme');
        localTheme ? setTheme(localTheme) : setMode('light');
        setComponentMounted(true);
    }, []);

    return [theme, toggleTheme, componentMounted]
};