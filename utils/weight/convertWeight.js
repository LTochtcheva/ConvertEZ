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
    case 'mg':
      return convertMg(text,to)
    case 'g':
      return convertGram(text,to)
    case 'kg':
      return convertKg(text,to)
    case 'ton':
      return convertTon(text,to)

    case 'oz':
      return convertOz(text,to)
    case 'lb':
      return convertLb(text,to)
    case 'st':
      return convertStone(text,to)
    default:
      alert('Select From Unit')
  }
}
