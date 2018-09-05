import { PluginObject } from 'Vue'
import Components from '@/components'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

export interface VulmaUseOptions {
  prefix?: string
}

export default {
  install (Vue, options) {
    library.add(fas, fab)

    Object.keys(Components).forEach(key => {
      Vue.component(`V${key}`, Components[key])
    })
  }
} as PluginObject<VulmaUseOptions>
