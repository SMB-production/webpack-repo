import {ResolveOptions} from 'webpack'
import type {BuildOptions} from './types/config'

export function buildResolvers(paths: BuildOptions['paths']): ResolveOptions {
   return {
      extensions: ['.tsx', '.ts', '.js', 'jsx'],
      preferAbsolute: true,
      modules: [paths.src, 'node_modules'],
      mainFiles: ['index'],
      alias: {},
   }
}
