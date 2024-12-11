import {AppRouter} from 'app/providers/router'
import './styles/index.scss'
import {classNames} from 'shared/lib/classNames/classNames'
import {useTheme} from 'app/providers/ThemeProvider'
import {Navbar} from 'widgets/navbar'
import {Sidebar} from 'widgets/Sidebar/ui/Sidebar/Sidebar'

export const App = () => {
   const {theme, toggleTheme} = useTheme()
   return (
      <div className={classNames('app', {hovered: true, selected: false}, [theme])}>
         <Navbar />
         <div className="content-page">
            <Sidebar />
            <AppRouter />
         </div>
      </div>
   )
}
