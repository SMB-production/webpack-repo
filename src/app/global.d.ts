declare module '*.scss' {
   interface IClassNames {
      [className: string]: string
   }
   const classNames: IClassNames
   export = classNames
}

declare module '*.svg' {
   const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>
   export default content
}

declare module '*.png'
declare module '*.jpeg'
declare module '*.svgr'

declare const __IS_DEV__: boolean
