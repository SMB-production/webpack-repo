import React, {FC, useState, useMemo} from 'react'
import {isStringInLiteralTypeFactory} from 'shared/utils/typeGuards/isStringInLiteralTypeFactory'
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from '../lib/ThemeContext'

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) || Theme.LIGHT
interface ThemeProviderProps {
   children: React.ReactNode
}

const themeTypeGuard = isStringInLiteralTypeFactory(Theme)

const ThemeProvider: FC<ThemeProviderProps> = ({children}) => {
   const [theme, setTheme] = useState<Theme>(
      themeTypeGuard(defaultTheme) ? defaultTheme : Theme.LIGHT,
   )

   const defaultProps = useMemo(
      () => ({
         theme: theme,
         setTheme: setTheme,
      }),
      [theme],
   )
   return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>
}
export default ThemeProvider
