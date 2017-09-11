import convertMm from './convertMm'
import convertCm from './convertCm'
import convertM from './convertM'
import convertKm from './convertKm'

import convertIn from './convertIn'
import convertYd from './convertYd'
import convertFt from './convertFt'
import convertMl from './convertMl'

export default (text, from, to) => {

  switch(from) {
    case 'mm':
      return convertMm(text,to)
    case 'cm':
      return convertCm(text,to)
    case 'm':
      return convertM(text,to)
    case 'km':
      return convertKm(text,to)

    case 'in':
      return convertIn(text,to)
    case 'yd':
      return convertYd(text,to)
    case 'ft':
      return convertFt(text,to)
    case 'ml':
      return convertMl(text,to)
    default:
      alert('Select From Unit')
  }
}
