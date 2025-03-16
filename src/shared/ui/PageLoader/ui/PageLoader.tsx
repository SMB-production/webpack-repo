import {classNames} from 'shared/lib/classNames/classNames'
import './PageLoader.scss'

interface PageLoaderProps {
   className?: string
}

export const PageLoader = ({className}: PageLoaderProps) => {
   const divs = Array.from(Array(8).keys()).map(item => <div key={item}></div>)
   return (
      <div className={classNames('page__loader')}>
         <div className="lds-roller">{divs}</div>
      </div>
   )
}
