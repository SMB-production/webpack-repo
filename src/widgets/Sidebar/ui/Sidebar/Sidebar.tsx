import {classNames} from 'shared/lib/classNames/classNames'
import {Button} from 'shared/ui/Button/Button'
import {LangSwitcher} from 'shared/ui/LangSwitcher/ui/LangSwitcher'
import {ThemeSwitcher} from 'shared/ui/ThemeSwitcher'
import cls from './Sidebar.module.scss'
import {useState} from 'react'

interface SidebarProps {
   className?: string
}

export const Sidebar = ({className}: SidebarProps) => {
   const [collapsed, setCollapsed] = useState(false)
   const onToggle = () => setCollapsed(prev => !prev)

   return (
      <div className={classNames(cls.sidebar, {[cls.collapsed]: collapsed}, [className])}>
         <div className={cls.sidebarButton}>
            <Button onClick={onToggle}>toggle</Button>
         </div>
         <div className={cls.switchers}>
            <ThemeSwitcher />
            <LangSwitcher className={cls.lang} />
         </div>
      </div>
   )
}
