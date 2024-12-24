import type {FC} from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import cls from './ThemeSwitcher.module.scss'
import {Theme, useTheme} from 'app/providers/ThemeProvider'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import {Button, Appearance} from 'shared/ui/Button/Button'
import React from 'react'

interface ThemeSwitcherProps {
   className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({className}) => {
   const {theme, toggleTheme} = useTheme()

   return (
      <Button
         appearance={Appearance.CLEAR}
         className={classNames(cls.ThemeSwitcher, {}, [className])}
         onClick={toggleTheme}
      >
         {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
      </Button>
   )
}
