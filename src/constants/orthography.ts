import { CONFIG } from './config'

export const ORTHOGRAPHY = [
  'a', 
  'a·', 
  'ȼ', 
  'ȼ̓', 
  'h', 
  'i', 
  'i·', 
  'k', 
  'k̓', 
  'ⱡ',
  'm', 
  'm̓', 
  'n', 
  'n̓', 
  'p', 
  'p̓', 
  'q', 
  'q̓', 
  's',
  't', 
  't̓', 
  'u', 
  'u·', 
  'w', 
  'x', 
  'y', 
  'ʔ'
]

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}
