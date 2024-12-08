import {classNames} from 'shared/lib/classNames/classNames'
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
         <div className={cls.sidebarbutton}>
            <button onClick={onToggle}>toggle</button>
         </div>

         <div className={cls.switchers}>
            <ThemeSwitcher />
         </div>
      </div>
   )
}
