import React,{createContext} from 'react'

const ThemeCOntext = createContext('Lofi-Song');

export const ThemeProvider =  ThemeCOntext.Provider;
export const ThemeConsumer =  ThemeCOntext.Consumer;

export default ThemeCOntext