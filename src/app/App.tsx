import {AppRouter} from 'app/providers/router'
import './styles/index.scss'
import {classNames} from 'shared/lib/classNames/classNames'
import {useTheme} from 'app/providers/ThemeProvider'

export const App = () => {
   const {theme} = useTheme()
   return (
      <div className={classNames('app', {hovered: true, selected: false}, [theme])}>
         <AppRouter />
      </div>
   )
}
