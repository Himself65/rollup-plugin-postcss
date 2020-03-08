import { relative } from 'path'
import normalizePath from './normalize-path'

const humanlizePath = filepath => normalizePath(relative(process.cwd(),
  filepath))

export default humanlizePath
