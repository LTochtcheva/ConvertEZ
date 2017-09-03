import convertMg from './convertMg'
import convertGram from './convertGram'
import convertKg from './convertKg'
import convertTon from './convertTon'

import convertOz from './convertOz'
import convertLb from './convertLb'
import convertStone from './convertStone'

export default (text, from, to) => {
  console.log(`In Weight converting ${text} ${from} into ${to}`)
  switch(from) {
    case 'Mg':
      return convertMg(text,to)
    case 'Gram':
      return convertGram(text,to)
    case 'Kg':
      return convertKg(text,to)
    case 'Ton':
      return convertTon(text,to)

    case 'Oz':
      return convertOz(text,to)
    case 'Lb':
      return convertLb(text,to)
    case 'Stone':
      return convertStone(text,to)
    default:
      alert('Select From Unit')
  }
}
