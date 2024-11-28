import {AppRouter} from 'app/providers/router'
import './styles/index.scss'
import {classNames} from 'shared/lib/classNames/classNames'
import {useTheme} from 'app/providers/ThemeProvider'
import {Navbar} from 'widgets/navbar'

export const App = () => {
   const {theme, toggleTheme} = useTheme()
   return (
      <div className={classNames('app', {hovered: true, selected: false}, [theme])}>
         <Navbar />
         <button onClick={toggleTheme}>Toggle Theme</button>
         <AppRouter />
      </div>
   )
}
