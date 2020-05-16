import { AriaConfigOptions, json, replacePlugin } from 'aria-build'
import { vue } from './libs'

export type ModeOptions = 'development' | 'production'

export interface VueAriaConfigOptions extends AriaConfigOptions {
  mode?: ModeOptions
}

export function getPlugins(opts?: VueAriaConfigOptions) {
  return [
    vue(),
    json(),
    replacePlugin({ 
      'process.env.NODE_ENV': '"production"',
      __DEV__: 'false'
    })
  ]
}