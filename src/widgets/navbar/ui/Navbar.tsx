import type {NavLinkProps} from 'react-router-dom'
import {classNames} from 'shared/lib/classNames/classNames'
import React from 'react'
import {AppLink, AppLinkTheme} from 'shared/ui/AppLink/AppLink'
import cls from './Navbar.module.scss'
import type {FC} from 'react'

interface NavbarProps extends NavLinkProps {
   className?: string
}

export const Navbar: FC<NavbarProps> = ({className}) => {
   return (
      <div className={classNames(cls.navbar, {}, [className])}>
         <div className={cls.links}>
            <AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={cls.mainLink}>
               Главная страница
            </AppLink>
            <AppLink theme={AppLinkTheme.PINK} to={'/about'}>
               О сайте
            </AppLink>
         </div>
      </div>
   )
}
