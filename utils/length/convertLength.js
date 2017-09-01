// title: 'Length',
//    icon: lengthIcon,
//    unitsMetric: ['Mm', 'Cm', 'M', 'Km'],
//    unitsImperial: ['In', 'Yd', 'Ft', 'Mile']
import convertMm from './convertMm'
import convertCm from './convertCm'
import convertM from './convertM'
import convertKm from './convertKm'

import convertIn from './convertIn'
import convertYd from './convertYd'
import convertFt from './convertFt'
import convertMl from './convertMl'

export default (text, from, to) => {
  console.log(`In Length converting ${text} ${from} into ${to}`)
  switch(from) {
    case 'Mm':
      return convertMm(text,to)
    case 'Cm':
      return convertCm(text,to)
    case 'M':
      return convertM(text,to)
    case 'Km':
      return convertKm(text,to)

    case 'In':
      return convertIn(text,to)
    case 'Yd':
      return convertTd(text,to)
    case 'Ft':
      return convertFt(text,to)
    case 'Cm':
      return convertMl(text,to)
    default:
      alert('Select From Unit')
  }
}
