import {AboutPage} from 'pages/AboutPage'
import {MainPage} from 'pages/MainPage'
import {Suspense} from 'react'
import {Link, Route, Routes} from 'react-router-dom'
import './styles/index.scss'
import {classNames} from 'shared/lib/classNames/classNames'
import {useTheme} from 'app/providers/ThemeProvider'

export const App = () => {
   const {theme, toggleTheme} = useTheme()
   return (
      <div className={classNames('app', {hovered: true, selected: false}, [theme])}>
         <button onClick={toggleTheme}>Toggle Theme</button>
         <Link to={'/'}>Главная страница</Link>
         <Link to={'/about'}>О сайте</Link>

         <Suspense fallback={<div>Loading...</div>}>
            <Routes>
               <Route path={'/'} element={<AboutPage />} />
               <Route path={'/about'} element={<MainPage />} />
            </Routes>
         </Suspense>
      </div>
   )
}
