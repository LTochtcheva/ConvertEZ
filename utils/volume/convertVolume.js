import convertMl from './convertMl'
import convertL from './convertL'
import convertMm3 from './convertMm3'
import convertCm3 from './convertCm3'
import convertM3 from './convertM3'
import convertGal from './convertGal'
import convertQt from './convertQt'
import convertPt from './convertPt'
import convertCup from './convertCup'

export default (text, from, to) => {
  switch(from) {
    case 'mL':
      return convertMl(text,to)
    case 'l':
      return convertL(text,to)
    case 'mm3':
      return convertMm3(text,to)
    case 'cm3':
      return convertCm3(text,to)
    case 'm3':
      return convertM3(text,to)
    case 'gal':
      return convertGal(text,to)
    case 'qt':
      return convertQt(text,to)
    case 'pt':
      return convertPt(text,to)
    case 'cup':
      return convertCup(text,to)
    default:
      alert('Select From Unit')
      return ''
  }
}
