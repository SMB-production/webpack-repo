import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from 'webpack'
import type {BuildOptions} from './types/config'

export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {
   const fileLoader = {
      test: /\.(png|jpe?g|gif|woff2|woff)$/i,
      use: [{loader: 'file-loader'}],
   }

   const svgLoader = {
      test: /\.svg$/,
      use: ['@svgr/webpack'],
   }

   const cssLoader = {
      test: /\.s[ac]ss|css$/i,
      use: [
         isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
         {
            loader: 'css-loader',
            options: {
               modules: {
                  namedExport: false,
                  auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                  localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]',
               },
            },
         },
         'sass-loader',
      ],
   }

   const typescriptLoader = {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
   }

   return [typescriptLoader, cssLoader, svgLoader, fileLoader]
}
