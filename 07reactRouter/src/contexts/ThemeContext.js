import { createContext, useContext } from "react";


//Step 1 :  Create context object using 'createContext' function. This context hold the data that we want to share
export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: ()=>{},
    lightTheme: ()=>{},
});

//Step 2 : Provide context to the child component via 'Provider' component.
export const ThemeContextProvider = ThemeContext.Provider;

//Step 3 : We can use the useContext hook to access the data from UserContext provider
export default function useTheme() {
    return useContext(ThemeContext);
}