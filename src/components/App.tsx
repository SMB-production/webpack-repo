import {Suspense} from 'react'
import {Link, Route, Routes} from 'react-router-dom'
import '../styles/index.scss'
import {classNames} from '../helpers/classNames/classNames'
import {AboutPageAsync} from '../pages/AboutPage/AboutPage.async'
import {MainPageAsync} from '../pages/MainPage/MainPage.async'
import {useTheme} from '../theme/useTheme'

export const App = () => {
   const {theme, toggleTheme} = useTheme()
   return (
      <div className={classNames('app', {hovered: true, selected: false}, [theme])}>
         <button onClick={toggleTheme}>Toggle Theme</button>
         <Link to={'/'}>Главная страница</Link>
         <Link to={'/about'}>О сайте</Link>

         <Suspense fallback={<div>Loading...</div>}>
            <Routes>
               <Route path={'/'} element={<AboutPageAsync />} />
               <Route path={'/about'} element={<MainPageAsync />} />
            </Routes>
         </Suspense>
      </div>
   )
}
