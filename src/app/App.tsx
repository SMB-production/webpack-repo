import {AppRouter} from 'app/providers/router'
import {Link} from 'react-router-dom'
import './styles/index.scss'
import {classNames} from 'shared/lib/classNames/classNames'
import {useTheme} from 'app/providers/ThemeProvider'

export const App = () => {
   const {theme} = useTheme()
   return (
      <div className={classNames('app', {hovered: true, selected: false}, [theme])}>
         <Link to={'/'}>Главная страница</Link>
         <Link to={'/about'}>О сайте</Link>
         <AppRouter />
      </div>
   )
}
