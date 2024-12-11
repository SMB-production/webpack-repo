import {classNames} from 'shared/lib/classNames/classNames'
import cls from './Button.module.scss'
import {ButtonHTMLAttributes, FC} from 'react'

export enum Appearance {
   CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
   className?: string
   appearance?: Appearance
}

export const Button: FC<ButtonProps> = ({className, children, appearance, ...otherProps}) => {
   return (
      <button
         className={classNames(cls.Button, {[cls[appearance]]: true}, [className])}
         {...otherProps}
      >
         {children}
      </button>
   )
}
