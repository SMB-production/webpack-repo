import React from 'react'
import {AppRouter} from 'app/providers/router'
import './styles/index.scss'
import {Suspense} from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import {useTheme} from 'app/providers/ThemeProvider'
import {Navbar} from 'widgets/navbar'
import {Sidebar} from 'widgets/Sidebar'

export const App = () => {
   const {theme} = useTheme()
   return (
      <div className={classNames('app', {hovered: true, selected: false}, [theme])}>
         <Suspense fallback={''}>
            <Navbar />
            <div className="content-page">
               <Sidebar />
               <AppRouter />
            </div>
         </Suspense>
      </div>
   )
}
