import React, {type FC, type ReactNode} from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import cls from './Button.module.scss'

export enum ThemeButton {
   CLEAR = 'clear',
}

interface ButtonProps {
   className?: string
   theme?: ThemeButton
   children?: ReactNode
   onClick?: () => void
}

export const Button: FC<ButtonProps> = ({className, children, theme}) => {
   return (
      <button className={classNames(cls.Button, {}, [className, cls[theme]])}>{children}</button>
   )
}
