import type {FC} from 'react'
import {Link, type LinkProps} from 'react-router-dom'
import {classNames} from 'shared/lib/classNames/classNames'
import cls from './AppLink.module.scss'

export enum AppLinkTheme {
   PRIMARY = 'primary',
   SECONDARY = 'secondary',
   PINK = 'pink',
}

interface AppLinkProps extends LinkProps {
   className?: string
   theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = ({
   to,
   className,
   children,
   theme = AppLinkTheme.PRIMARY,
}) => {
   return (
      <Link to={to} className={classNames(cls.AppLink, {}, [className, cls[theme]])}>
         {children}
      </Link>
   )
}
