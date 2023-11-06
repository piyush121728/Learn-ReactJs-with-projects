import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import { ThemeContextProvider } from './contexts/ThemeContext'
import { useEffect, useState } from 'react'

function Layout() {

  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark");
  }

  useEffect(()=>{
    document.querySelector('html').classList.remove("light", "dark");
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])

  return (
    <ThemeContextProvider value={{ themeMode, lightTheme, darkTheme }}>
      <Header />
      <Outlet />
      <Footer />
    </ThemeContextProvider>
  )
}
export default Layout